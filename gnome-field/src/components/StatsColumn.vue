<template>
  <h2>Данные бурения</h2>
  <span>Количество шагов: {{ store.getSteps() }}</span>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

export default defineComponent({
  name: "StatsColumn",
  setup() {
    const store = useAppStore();
    return { store };
  },
});
</script>
