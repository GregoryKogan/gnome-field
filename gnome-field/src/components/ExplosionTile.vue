<template>
  <img
    src="@/assets/explosion.jpg"
    :style="{
      top: `calc((${i} - 1) / 24 * 99%)`,
      left: `calc((${j} - 1) / 32 * 100%)`,
      opacity: `${opacity}`,
      height: `calc(100% / 8)`,
    }"
    style="aspect-ratio: 1; position: absolute; z-index: 5"
  />
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

export default defineComponent({
  name: "ExplosionTile",
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
      return this.store.getTile(this.i, this.j).isOpened() ? 1 : 0;
    },
  },
});
</script>
