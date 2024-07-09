<template>
  <div class="tile-grid">
    <div v-for="i in width * height" :key="i">
      <SingleTile :i="Math.floor((i - 1) / width)" :j="(i - 1) % width" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

export default defineComponent({
  name: "TileGrid",
  setup() {
    const store = useAppStore();
    return { store };
  },
  computed: {
    width() {
      return this.store.getWidth();
    },
    height() {
      return this.store.getHeight();
    },
  },
});
</script>

<style scoped>
.tile-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind("width"), calc(100% / v-bind("width")));
  grid-template-rows: repeat(v-bind("height"), calc(100% / v-bind("height")));
}
</style>
