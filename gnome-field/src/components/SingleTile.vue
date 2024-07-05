<template>
  <div @click="activate" class="tile"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SingleTile",
  data: () => ({
    opacity: 1,
  }),
  methods: {
    activate() {
      this.opacity = 0;
    },
  },
});
</script>

<style scoped>
.tile {
  background-color: #565656;
  border: 1px solid #e0e0e0;
  aspect-ratio: 1;
  width: 100%;
  opacity: v-bind("opacity");
}
</style>
