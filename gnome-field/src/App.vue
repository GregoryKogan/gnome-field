<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

export default defineComponent({
  name: "DefaultLayout",
  setup() {
    const store = useAppStore();
    store.loadMap();
    return { store };
  },
});
</script>

<style>
html {
  overflow: hidden;
}
</style>
