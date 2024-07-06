<template>
  <div class="tile-grid">
    <div v-for="i in width * height" :key="i">
      <SingleTile :i="Math.floor((i - 1) / width)" :j="(i - 1) % width" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TileGrid",
  setup() {
    return {};
  },
  data: () => ({
    height: 24,
    width: 32,
  }),
});
</script>

<style scoped>
.tile-grid {
  width: 100%;
  display: grid;
  aspect-ratio: 4/3;
  grid-template-columns: repeat(32, calc(100% / v-bind("width")));
  grid-template-rows: repeat(24, calc(100% / v-bind("height")));
}
</style>
