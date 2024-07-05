<template>
  <div
    style="
      position: relative;
      max-height: 100vh;
      aspect-ratio: 4/3;
      margin: auto;
    "
  >
    <img src="@/assets/4-3.jpg" style="aspect-ratio: 4/3; width: 100%" />
    <ExplosionTile
      v-for="bomb in store.bombs"
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
  name: "FieldPage",
  setup() {
    const store = useAppStore();
    return { store };
  },
  mounted() {
    if (!this.store.loggedIn) {
      this.$router.push("/");
    }
  },
});
</script>
