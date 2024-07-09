<template>
  <div>
    <img src="@/assets/map.png" style="width: 100%" />
    <ExplosionTile
      v-for="bomb in store.getBombs()"
      :key="bomb"
      :i="bomb.i"
      :j="bomb.j"
    />
    <TileGrid style="z-index: 10; position: absolute; top: 0; left: 0" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

export default defineComponent({
  name: "GameField",
  setup() {
    const store = useAppStore();
    return { store };
  },
});
</script>
