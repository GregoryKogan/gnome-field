<template>
  <div @click="tap" class="tile"></div>
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
          return 0.2;
        default:
          return 0;
      }
    },
    color() {
      const visibility = this.store.getTile(this.i, this.j).visibility;
      if (visibility != TileVisibility.Scanned) return "#2a2a2a";
      return "#00ff00";
    },
  },
  methods: {
    tap() {
      this.store.tapTile(this.i, this.j);
    },
  },
});
</script>

<style scoped>
.tile {
  background-color: v-bind("color");
  border: 1px solid #01ff12;
  aspect-ratio: 1;
  width: 100%;
  opacity: v-bind("opacity");
}
</style>
