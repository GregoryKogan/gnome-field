// Utilities
import { defineStore } from "pinia";

export const MapTiles = {
  Water: 0,
  Stone: 1,
  Entrance: 2,
};

export const TileStates = {
  Closed: 1,
  Revealed: 0.5,
  Opened: 0,
};

export const useAppStore = defineStore("app", {
  state: () => ({
    loggedIn: false,
    map: Array(24 * 32).fill(1),
    field: Array(24 * 32).fill(1),
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
        this.map = data
          .split("\n")
          .map((row) => row.split(";"))
          .flat()
          .map(Number);
      } catch (error) {
        console.error("Error loading the map:", error);
      }
      this.openEntrance();
    },
    getTile(i, j) {
      if (i < 0 || i >= 24 || j < 0 || j >= 32) return TileStates.Closed;
      return this.field[i * 32 + j];
    },
    openTile(i, j) {
      if (this.field[i * 32 + j] == TileStates.Opened) return;
      if (
        this.getTile(i - 1, j) == TileStates.Opened ||
        this.getTile(i + 1, j) == TileStates.Opened ||
        this.getTile(i, j - 1) == TileStates.Opened ||
        this.getTile(i, j + 1) == TileStates.Opened
      ) {
        this.field[i * 32 + j] = TileStates.Opened;
        if (this.map[i * 32 + j] == MapTiles.Water) this.splashOpen(i, j);
      }
    },
    splashOpen(i, j) {
      if (this.map[i * 32 + j] != MapTiles.Water) return;
      this.openTile(i, j);

      if (i > 0 && this.getTile(i - 1, j) == TileStates.Closed)
        this.splashOpen(i - 1, j);
      if (i < 23 && this.getTile(i + 1, j) == TileStates.Closed)
        this.splashOpen(i + 1, j);
      if (j > 0 && this.getTile(i, j - 1) == TileStates.Closed)
        this.splashOpen(i, j - 1);
      if (j < 31 && this.getTile(i, j + 1) == TileStates.Closed)
        this.splashOpen(i, j + 1);
    },
    openEntrance() {
      for (let i = 0; i < 24 * 32; i++) {
        if (this.map[i] == MapTiles.Entrance) this.field[i] = TileStates.Opened;
      }
    },
  },
});
