<template>
  <img
    src="@/assets/explosion.jpg"
    :style="{
      top: `${topOffset}%`,
      left: `${leftOffset}%`,
      opacity: `${opacity}`,
    }"
    style="aspect-ratio: 1; position: absolute; z-index: 5; height: 12.5%"
  />
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore, TileStates } from "@/stores/app";

export default defineComponent({
  name: "ExplosionTile",
  props: {
    i: Number,
    j: Number,
  },
  data: () => ({
    topOffset: 0,
    leftOffset: 0,
  }),
  computed: {
    opacity() {
      return this.store.getTile(this.i, this.j) == TileStates.Opened ? 1 : 0;
    },
  },
  mounted() {
    this.calcOffsets();
  },
  setup() {
    const store = useAppStore();
    return { store };
  },
  methods: {
    calcOffsets() {
      this.topOffset = ((this.i - 1) / 24) * 100;
      this.leftOffset = ((this.j - 1) / 32) * 100;
    },
  },
});
</script>
