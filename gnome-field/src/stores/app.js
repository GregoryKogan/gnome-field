// Utilities
import { defineStore } from "pinia";

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
    },
    getTile(i, j) {
      return this.field[i * 32 + j];
    },
    openTile(i, j) {
      if (this.field[i * 32 + j] === 0) return;
      this.field[i * 32 + j] = 0;
      if (this.map[i * 32 + j] === 0) this.splashOpen(i, j);
    },
    splashOpen(i, j) {
      this.openTile(i, j);
      if (this.map[i * 32 + j] === 1) return;

      if (i > 0 && this.getTile(i - 1, j) === 1) this.splashOpen(i - 1, j);
      if (i < 23 && this.getTile(i + 1, j) === 1) this.splashOpen(i + 1, j);
      if (j > 0 && this.getTile(i, j - 1) === 1) this.splashOpen(i, j - 1);
      if (j < 31 && this.getTile(i, j + 1) === 1) this.splashOpen(i, j + 1);
    },
  },
});
