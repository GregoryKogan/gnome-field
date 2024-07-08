<template>
  <v-container fluid fill-height style="height: 100%">
    <v-row align="start" dense fill-height style="height: 100%">
      <div
        style="
          position: relative;
          max-height: 100vh;
          aspect-ratio: 4/3;
          width: max(calc(100% - 22rem), 50%);
          margin: auto;
        "
      >
        <GameField />
      </div>
      <div style="width: 22rem; padding: 1em; height: 100%">
        <StatsColumn />
      </div>
    </v-row>
  </v-container>
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
});
</script>
