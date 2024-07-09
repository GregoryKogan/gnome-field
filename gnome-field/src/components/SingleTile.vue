<template>
  <div @click="tap" @mouseover="mouseOver" class="tile"></div>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore, TileVisibility } from "@/stores/app";

export default defineComponent({
  name: "SingleTile",
  props: {
    i: Number,
    j: Number,
  },
  setup() {
    const store = useAppStore();
    return { store };
  },
  computed: {
    opacity() {
      const visibility = this.store.getTile(this.i, this.j).visibility;
      switch (visibility) {
        case TileVisibility.Closed:
          return 1;
        case TileVisibility.Opened:
          return 0;
        case TileVisibility.Revealed:
          return 0.5;
        case TileVisibility.Scanned:
          return 0.3;
        default:
          return 0;
      }
    },
    color() {
      const visibility = this.store.getTile(this.i, this.j).visibility;
      const availability = this.store.isAvailable(this.i, this.j);
      if (visibility != TileVisibility.Scanned)
        return availability ? "#277a33" : "#2a2a2a";
      return availability ? "#ff00ff" : "#2e002e";
    },
    borderColor() {
      const visibility = this.store.getTile(this.i, this.j).visibility;
      return visibility == TileVisibility.Scanned ? "#ff00ff" : "#01ff12";
    },
  },
  methods: {
    tap() {
      this.store.tapTile(this.i, this.j);
    },
    mouseOver() {
      this.store.mouseI = this.i + 1;
      this.store.mouseJ = this.j + 1;
    },
  },
});
</script>

<style scoped>
.tile {
  background-color: v-bind("color");
  border: 1px solid v-bind("borderColor");
  aspect-ratio: 1;
  width: 100%;
  opacity: v-bind("opacity");
  cursor: url("@/assets/cross.cur"), auto;
}
</style>
