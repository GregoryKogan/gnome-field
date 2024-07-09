<template>
  <v-container fluid fill-height style="height: 100%">
    <v-row align="start" dense fill-height style="height: 100%">
      <div
        style="
          position: relative;
          width: max(calc(100% - 25rem), 50%);
          margin: auto;
        "
        :style="{
          aspectRatio: (store.getWidth() + 2) / (store.getHeight() + 2),
          display: `grid`,
          gridTemplateColumns: `repeat(${store.getWidth() + 2}, calc(100% / ${
            store.getWidth() + 2
          }))`,
          gridTemplateRows: `repeat(${store.getHeight() + 2}, calc(100% / ${
            store.getHeight() + 2
          }))`,
        }"
      >
        <div
          v-for="i in (store.getWidth() + 2) * (store.getHeight() + 2)"
          :key="i"
        >
          <BorderTile :index="i - 1" />
        </div>
        <div
          style="position: absolute"
          :style="{
            width: `calc(100% / ${store.getWidth() + 2} * ${store.getWidth()})`,
            top: `calc(100% / ${store.getHeight() + 2})`,
            left: `calc(100% / ${store.getWidth() + 2})`,
          }"
        >
          <GameField />
        </div>
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
