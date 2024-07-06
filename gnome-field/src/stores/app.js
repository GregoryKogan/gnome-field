// Utilities
import { defineStore } from "pinia";

export const TileTypes = {
  Water: 0,
  Stone: 1,
  Entrance: 2,
  Cliff: 3,
  Bomb: 4,
  Sand: 5,
};

export const WallDirections = {
  Top: 0,
  Right: 1,
  Bottom: 2,
  Left: 3,
};

export const TileVisibility = {
  Closed: 1,
  Revealed: 0.5,
  Opened: 0,
};

export class Tile {
  constructor(type, walls) {
    this.type = type;
    this.walls = walls;
    this.visibility = TileVisibility.Closed;
  }

  isOpened() {
    return this.visibility == TileVisibility.Opened;
  }

  isClosed() {
    return this.visibility == TileVisibility.Closed;
  }

  isRevealed() {
    return (
      this.visibility == TileVisibility.Revealed ||
      this.visibility == TileVisibility.Opened
    );
  }

  hasWall(direction) {
    return this.walls[direction];
  }

  setVisibility(visibility) {
    this.visibility = visibility;
  }

  setType(type) {
    this.type = type;
  }
}

export class Field {
  constructor(width, height, types) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    this.bombs = [];

    for (let i = 0; i < width * height; i++) {
      this.tiles.push(new Tile(types[i], [false, false, false, false]));
      if (types[i] == TileTypes.Bomb)
        this.bombs.push({ i: Math.floor(i / width), j: i % width });
    }

    this.openEntrance();
  }

  static async fromCSV(width, height, csv_filename) {
    try {
      const response = await fetch(csv_filename);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.text();
      const stored_map = data
        .split("\n")
        .map((row) => row.split(";"))
        .flat()
        .map(Number);
      return new Field(width, height, stored_map);
    } catch (error) {
      console.error("Error loading the map:", error);
    }
  }

  index(i, j) {
    return i * this.width + j;
  }

  get(i, j) {
    if (i < 0 || i >= this.height || j < 0 || j >= this.width)
      return new Tile(TileTypes.Stone, [false, false, false, false]);
    return this.tiles[i * this.width + j];
  }

  open(i, j) {
    if (!this.canOpen(i, j)) return;

    this.tiles[this.index(i, j)].setVisibility(TileVisibility.Opened);

    if (this.tiles[this.index(i, j)].type == TileTypes.Bomb)
      this.handleExplosion(i, j);

    if (
      this.tiles[this.index(i, j)].type == TileTypes.Water ||
      this.tiles[this.index(i, j)].type == TileTypes.Sand
    )
      this.splashOpen(i, j);
  }

  canOpen(i, j) {
    if (this.get(i, j).isOpened()) return false;

    const left = this.get(i, j - 1);
    const right = this.get(i, j + 1);
    const up = this.get(i - 1, j);
    const down = this.get(i + 1, j);

    return (
      (left.isOpened() &&
        left.type != TileTypes.Water &&
        left.type != TileTypes.Cliff) ||
      (right.isOpened() &&
        right.type != TileTypes.Water &&
        right.type != TileTypes.Cliff) ||
      (down.isOpened() &&
        down.type != TileTypes.Water &&
        down.type != TileTypes.Cliff) ||
      (up.isOpened() &&
        up.type != TileTypes.Water &&
        up.type != TileTypes.Cliff)
    );
  }

  flood(i, j) {
    if (!this.canFlood(i, j)) return;

    if (this.get(i, j).type == TileTypes.Water)
      this.tiles[this.index(i, j)].setVisibility(TileVisibility.Opened);
    if (this.get(i, j).type == TileTypes.Sand)
      this.tiles[this.index(i, j)].setVisibility(TileVisibility.Revealed);
  }

  canFlood(i, j) {
    if (this.get(i, j).isRevealed()) return false;
    if (
      this.get(i, j).type != TileTypes.Water &&
      this.get(i, j).type != TileTypes.Sand
    )
      return false;

    const left = this.get(i, j - 1);
    const right = this.get(i, j + 1);
    const up = this.get(i - 1, j);
    const down = this.get(i + 1, j);

    return (
      (left.isRevealed() &&
        (left.type == TileTypes.Water || left.type == TileTypes.Sand)) ||
      (right.isRevealed() &&
        (right.type == TileTypes.Water || right.type == TileTypes.Sand)) ||
      (up.isRevealed() &&
        (up.type == TileTypes.Water || up.type == TileTypes.Sand)) ||
      (down.isRevealed() &&
        (down.type == TileTypes.Water || down.type == TileTypes.Sand))
    );
  }

  splashOpen(i, j) {
    if (
      this.tiles[this.index(i, j)].type != TileTypes.Water &&
      this.tiles[this.index(i, j)].type != TileTypes.Sand
    )
      return;
    this.flood(i, j);

    if (i > 0 && this.get(i - 1, j).isClosed()) this.splashOpen(i - 1, j);
    if (i < 23 && this.get(i + 1, j).isClosed()) this.splashOpen(i + 1, j);
    if (j > 0 && this.get(i, j - 1).isClosed()) this.splashOpen(i, j - 1);
    if (j < 31 && this.get(i, j + 1).isClosed()) this.splashOpen(i, j + 1);
  }

  openEntrance() {
    for (let i = 0; i < this.width * this.height; i++) {
      if (this.tiles[i].type == TileTypes.Entrance)
        this.tiles[i].setVisibility(TileVisibility.Opened);
    }
  }

  handleExplosion(i, j) {
    for (let h_offset = -1; h_offset <= 1; h_offset++) {
      for (let v_offset = -1; v_offset <= 1; v_offset++) {
        this.tiles[this.index(i + v_offset, j + h_offset)].setVisibility(
          TileVisibility.Opened
        );
        this.tiles[this.index(i + v_offset, j + h_offset)].setType(
          TileTypes.Cliff
        );
      }
    }
  }
}

export const useAppStore = defineStore("app", {
  state: () => ({
    loggedIn: false,
    field: null,
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    async loadMap() {
      this.field = await Field.fromCSV(32, 24, "/map.csv");
    },
    tapTile(i, j) {
      this.field.open(i, j);
    },
    getTile(i, j) {
      return this.field.get(i, j);
    },
    getBombs() {
      return this.field.bombs;
    },
  },
});
