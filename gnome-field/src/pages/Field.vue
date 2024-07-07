<template>
  <v-container fluid fill-height style="height: 100%">
    <v-row align="start" dense fill-height style="height: 100%">
      <div
        style="
          position: relative;
          max-height: 100vh;
          aspect-ratio: 4/3;
          width: 70%;
          margin: auto;
        "
      >
        <GameField />
      </div>
      <div style="width: 30%; padding: 1em">
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
  mounted() {
    if (!this.store.loggedIn) {
      this.$router.push("/");
    }
  },
});
</script>
