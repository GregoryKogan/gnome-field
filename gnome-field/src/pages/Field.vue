<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <h1 align="center">Field Page</h1>
    </v-responsive>
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
