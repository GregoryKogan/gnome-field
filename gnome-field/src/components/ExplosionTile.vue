<template>
  <img
    src="@/assets/explosion.png"
    :style="{
      top: `calc((${i} - 1) / ${store.getHeight()} * 99%)`,
      left: `calc((${j} - 1) / ${store.getWidth()} * 100%)`,
      opacity: `${opacity}`,
      height: `calc(100% / ${store.getHeight() / 3})`,
    }"
    style="aspect-ratio: 1; position: absolute; z-index: 5"
  />
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";
import { watch } from "vue";

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
  mounted() {
    watch(
      () => this.store.getTile(this.i, this.j).isOpened(),
      (isOpened) => {
        if (isOpened && !this.opened) {
          this.opened = true;
          setTimeout(() => {
            this.opacity = 1;
          }, 1000);
        }
      }
    );
  },
  data: () => ({
    opened: false,
    opacity: 0,
  }),
});
</script>
