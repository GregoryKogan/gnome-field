<template>
  <div
    style="
      border: 2px solid #01ff12;
      height: 93vh;
      padding: 1em;
      font-family: monospace;
      overflow: hidden;
    "
  >
    <h1>Данные бурения</h1>
    <span>Пробурено кубов: {{ store.getSteps() }}</span>
    <br />
    <span>Потрачено кредитов: {{ store.getCreditsSpent() }}</span>
    <br />
    <span
      >Запуск:
      {{ store.getTimeToShutdown() == 0 ? "2 кредита" : "1 кредит" }}</span
    >
    <br />
    <h2 v-if="store.getTimeToShutdown() == 0" class="shutdown-msg">
      БУР ОСТАНОВЛЕН!
    </h2>
    <div v-else>
      <span>До остановки бура:</span>
      <br />
      <h2>{{ shutdownTime }}</h2>
    </div>
    <h3>Журнал:</h3>
    <div v-for="record in journal" :key="record">
      <span
        >{{ record.time }} ({{ record.tile.i }}, {{ record.tile.j }})
        {{ getTypeName(record.type) }}</span
      >
      <br />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore, TileTypes } from "@/stores/app";

export default defineComponent({
  name: "StatsColumn",
  setup() {
    const store = useAppStore();
    return { store };
  },
  computed: {
    shutdownTime() {
      const time = this.store.getTimeToShutdown();
      const seconds = Math.floor(time / 1000) % 60;
      const minutes = Math.floor(time / 60000) % 60;
      return `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    },
    journal() {
      return [...this.store.getJournal()].reverse();
    },
  },
  methods: {
    getTypeName(type) {
      switch (type) {
        case TileTypes.Water:
          return "вода";
        case TileTypes.Stone:
          return "земля";
        case TileTypes.Entrance:
          return "вход";
        case TileTypes.Cliff:
          return "скала";
        case TileTypes.Bomb:
          return "бомба";
        case TileTypes.Sand:
          return "песок";
        case TileTypes.Mole:
          return "крот";
        case TileTypes.PortalEntrance:
          return "портал (вход)";
        case TileTypes.Target:
          return "цель";
        case TileTypes.PortalExit:
          return "портал (выход)";
        default:
          return "неизвестно";
      }
    },
  },
});
</script>

<style scoped>
.shutdown-msg {
  color: red;
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
