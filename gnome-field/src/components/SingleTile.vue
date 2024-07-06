<template>
  <div @click="activate" class="tile"></div>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

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
      return this.store.getTile(this.i, this.j).visibility;
    },
  },
  methods: {
    activate() {
      this.store.openTile(this.i, this.j);
    },
  },
});
</script>

<style scoped>
.tile {
  background-color: #565656;
  border: 1px solid #8f8f8f;
  aspect-ratio: 1;
  width: 100%;
  opacity: v-bind("opacity");
}
</style>
