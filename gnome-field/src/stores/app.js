// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
  },
});
