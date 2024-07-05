// Utilities
import { defineStore } from "pinia";

export const TileTypes = {
  Water: 0,
  Stone: 1,
  Entrance: 2,
  Cliff: 3,
  Bomb: 4,
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
    return (
      this.visibility == TileVisibility.Closed ||
      this.visibility == TileVisibility.Revealed
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

export const useAppStore = defineStore("app", {
  state: () => ({
    loggedIn: false,
    field: [],
    bombs: [],
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    async loadMap() {
      try {
        const response = await fetch("/map.csv");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        const stored_map = data
          .split("\n")
          .map((row) => row.split(";"))
          .flat()
          .map(Number);
        for (let i = 0; i < 24 * 32; i++) {
          this.field.push(
            new Tile(stored_map[i], [false, false, false, false])
          );
          if (stored_map[i] == TileTypes.Bomb)
            this.bombs.push({ i: Math.floor(i / 32), j: i % 32 });
        }
      } catch (error) {
        console.error("Error loading the map:", error);
      }
      this.openEntrance();
    },
    getTile(i, j) {
      if (i < 0 || i >= 24 || j < 0 || j >= 32)
        return new Tile(TileTypes.Stone, [false, false, false, false]);
      return this.field[i * 32 + j];
    },
    openTile(i, j) {
      if (this.field[i * 32 + j].isOpened()) return;
      if (
        this.getTile(i - 1, j).isOpened() ||
        this.getTile(i + 1, j).isOpened() ||
        this.getTile(i, j - 1).isOpened() ||
        this.getTile(i, j + 1).isOpened()
      ) {
        this.field[i * 32 + j].setVisibility(TileVisibility.Opened);
        if (this.field[i * 32 + j].type == TileTypes.Bomb)
          this.handleExplosion(i, j);
        if (this.field[i * 32 + j].type == TileTypes.Water)
          this.splashOpen(i, j);
      }
    },
    splashOpen(i, j) {
      if (this.field[i * 32 + j].type != TileTypes.Water) return;
      this.openTile(i, j);

      if (i > 0 && this.getTile(i - 1, j).isClosed()) this.splashOpen(i - 1, j);
      if (i < 23 && this.getTile(i + 1, j).isClosed())
        this.splashOpen(i + 1, j);
      if (j > 0 && this.getTile(i, j - 1).isClosed()) this.splashOpen(i, j - 1);
      if (j < 31 && this.getTile(i, j + 1).isClosed())
        this.splashOpen(i, j + 1);
    },
    openEntrance() {
      for (let i = 0; i < 24 * 32; i++) {
        if (this.field[i].type == TileTypes.Entrance)
          this.field[i].setVisibility(TileVisibility.Opened);
      }
    },
    handleExplosion(i, j) {
      for (let h_offset = -1; h_offset <= 1; h_offset++) {
        for (let v_offset = -1; v_offset <= 1; v_offset++) {
          this.field[(i + h_offset) * 32 + j + v_offset].setVisibility(
            TileVisibility.Opened
          );
          this.field[(i + h_offset) * 32 + j + v_offset].setType(
            TileTypes.Cliff
          );
        }
      }
    },
  },
});
