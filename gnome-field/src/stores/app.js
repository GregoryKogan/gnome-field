// Utilities
import { defineStore } from "pinia";

export const TileTypes = {
  Water: 0,
  Stone: 1,
  Entrance: 2,
  Cliff: 3,
  Bomb: 4,
  Sand: 5,
  Mole: 6,
  PortalEntrance: 7,
  Target: 8,
  PortalExit: 9,
};

export const WallDirections = {
  Top: 0,
  Right: 1,
  Bottom: 2,
  Left: 3,
};

export const TileVisibility = {
  Closed: 1,
  Scanned: 2,
  Revealed: 3,
  Opened: 4,
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
    return (
      this.visibility == TileVisibility.Closed ||
      this.visibility == TileVisibility.Scanned
    );
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

export class Portal {
  constructor(entrance_tiles, exit_tiles) {
    this.entrance_tiles = entrance_tiles;
    this.exit_tiles = exit_tiles;
  }
}

export class Field {
  constructor(width, height, tiles, portals = []) {
    this.width = width;
    this.height = height;
    this.tiles = tiles;
    this.portals = portals;
    this.bombs = [];

    for (let i = 0; i < width * height; i++) {
      if (this.tiles[i].type == TileTypes.Bomb)
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
        .map(Number)
        .map((tile) => {
          let newTile = new Tile(tile, [false, false, false, false]);
          newTile.setVisibility(TileVisibility.Closed);
          return newTile;
        });
      return new Field(width, height, stored_map);
    } catch (error) {
      console.error("Error loading the map:", error);
    }
  }

  static async fromJSON(json_filename) {
    try {
      const response = await fetch(json_filename);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const tiles = data.tiles.map((tile) => {
        let newTile = new Tile(tile.type, tile.walls);
        newTile.setVisibility(tile.visibility);
        return newTile;
      });
      const portals = data.portals.map(
        (portal) => new Portal(portal.entrance, portal.exit)
      );
      return new Field(data.width, data.height, tiles, portals);
    } catch (error) {
      console.error("Error loading the map:", error);
    }
  }

  exportToJson(filename) {
    const data = {
      width: this.width,
      height: this.height,
      tiles: this.tiles.map((tile) => ({
        type: tile.type,
        walls: tile.walls,
        visibility: tile.visibility,
      })),
      portals: this.portals.map((portal) => ({
        entrance: portal.entrance_tiles,
        exit: portal.exit_tiles,
      })),
    };
    const json = JSON.stringify(data);

    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(json)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  index(i, j) {
    return i * this.width + j;
  }

  index2d(index) {
    return [Math.floor(index / this.width), index % this.width];
  }

  get(i, j) {
    if (i < 0 || i >= this.height || j < 0 || j >= this.width)
      return new Tile(TileTypes.Stone, [false, false, false, false]);
    return this.tiles[i * this.width + j];
  }

  open(i, j) {
    if (!this.canOpen(i, j)) return;

    const oldVisibility = this.tiles[this.index(i, j)].visibility;
    this.tiles[this.index(i, j)].setVisibility(TileVisibility.Opened);

    if (
      this.tiles[this.index(i, j)].type == TileTypes.Water ||
      this.tiles[this.index(i, j)].type == TileTypes.Sand
    )
      this.splashOpen(i, j);

    if (this.tiles[this.index(i, j)].type == TileTypes.Bomb)
      this.handleExplosion(i, j);

    if (
      this.tiles[this.index(i, j)].type == TileTypes.PortalEntrance &&
      oldVisibility == TileVisibility.Closed
    )
      this.handlePortalEntrance(i, j);

    if (
      this.tiles[this.index(i, j)].type == TileTypes.PortalExit &&
      oldVisibility == TileVisibility.Closed
    )
      this.handlePortalExit(i, j);

    if (
      this.tiles[this.index(i, j)].type == TileTypes.Mole &&
      oldVisibility == TileVisibility.Closed
    )
      this.handleMole(i, j);

    if (i > 0 && this.get(i - 1, j).visibility == TileVisibility.Revealed)
      this.open(i - 1, j);
    if (
      i < this.height - 1 &&
      this.get(i + 1, j).visibility == TileVisibility.Revealed
    )
      this.open(i + 1, j);
    if (j > 0 && this.get(i, j - 1).visibility == TileVisibility.Revealed)
      this.open(i, j - 1);
    if (
      j < this.width - 1 &&
      this.get(i, j + 1).visibility == TileVisibility.Revealed
    )
      this.open(i, j + 1);
  }

  canOpen(i, j) {
    if (this.get(i, j).isOpened()) return false;

    const left = this.get(i, j - 1);
    const right = this.get(i, j + 1);
    const up = this.get(i - 1, j);
    const down = this.get(i + 1, j);

    if (
      this.get(i, j).type == TileTypes.Cliff &&
      this.get(i, j).visibility == TileVisibility.Revealed &&
      (left.isOpened() || right.isOpened() || up.isOpened() || down.isOpened())
    )
      return true;

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
      this.get(i, j).type != TileTypes.Water &&
      this.get(i, j).type != TileTypes.Sand
    )
      return;
    this.flood(i, j);

    if (i > 0 && this.get(i - 1, j).isClosed()) this.splashOpen(i - 1, j);
    if (i < this.height - 1 && this.get(i + 1, j).isClosed())
      this.splashOpen(i + 1, j);
    if (j > 0 && this.get(i, j - 1).isClosed()) this.splashOpen(i, j - 1);
    if (j < this.width - 1 && this.get(i, j + 1).isClosed())
      this.splashOpen(i, j + 1);

    if (
      (i > 0 &&
        this.get(i - 1, j).isOpened() &&
        this.get(i - 1, j).type != TileTypes.Water) ||
      (i < this.height - 1 &&
        this.get(i + 1, j).isOpened() &&
        this.get(i + 1, j).type != TileTypes.Water) ||
      (j > 0 &&
        this.get(i, j - 1).isOpened() &&
        this.get(i, j - 1).type != TileTypes.Water) ||
      (j < this.width - 1 &&
        this.get(i, j + 1).isOpened() &&
        this.get(i, j + 1).type != TileTypes.Water)
    )
      this.open(i, j);
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

  handlePortalEntrance(i, j) {
    const portal = this.portals.find((portal) =>
      portal.entrance_tiles.includes(this.index(i, j))
    );
    for (let exit_tile of portal.exit_tiles)
      this.tiles[exit_tile].setVisibility(TileVisibility.Opened);
    for (let entrance_tile of portal.entrance_tiles)
      this.tiles[entrance_tile].setVisibility(TileVisibility.Opened);

    this.splashHide(i, j);
  }

  handlePortalExit(i, j) {
    const portal = this.portals.find((portal) =>
      portal.exit_tiles.includes(this.index(i, j))
    );
    for (let exit_tile of portal.exit_tiles)
      this.open(...this.index2d(exit_tile));
  }

  splashHide(i, j) {
    if (!this.tiles[this.index(i, j)].isOpened()) return;
    if (this.tiles[this.index(i, j)].type == TileTypes.Water) return;
    this.tiles[this.index(i, j)].setVisibility(TileVisibility.Revealed);

    if (i > 0) this.splashHide(i - 1, j);
    if (i < this.height - 1) this.splashHide(i + 1, j);
    if (j > 0) this.splashHide(i, j - 1);
    if (j < this.width - 1) this.splashHide(i, j + 1);
  }

  handleMole(i, j) {
    for (let h_offset = -3; h_offset <= 3; h_offset++) {
      for (let v_offset = -3; v_offset <= 3; v_offset++) {
        if (this.get(i + v_offset, j + h_offset).isClosed()) {
          this.tiles[this.index(i + v_offset, j + h_offset)].setVisibility(
            TileVisibility.Scanned
          );
        }
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
      // this.field = await Field.fromCSV(32, 24, "/map.csv");
      // this.field.exportToJson("map.json");
      this.field = await Field.fromJSON("/map.json");
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
