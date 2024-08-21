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
    <h1 @click="toggleFullscreen()">Данные бурения</h1>
    <div
      v-if="!store.drillInitialized"
      style="display: flex; justify-content: center; align-items: center"
    >
      <v-btn @click="store.initDrill()" variant="outlined" style="margin: 1em"
        >за счёт фирмы!</v-btn
      >
      <br />
    </div>
    <span>Цена бурения: 1 энерго-юнит</span>
    <br />
    <span>Пробурено кубов: {{ store.getSteps() }}</span>
    <br />
    <span>Потрачено энерго-юнитов: {{ store.getCreditsSpent() }}</span>
    <br />
    <br />
    <div v-if="store.getTimeToShutdown() == 0">
      <h2 class="shutdown-msg">БУР ОСТАНОВЛЕН!</h2>
      <span><b>Запуск: 1 энерго-юнит</b></span>
    </div>
    <div v-else>
      <span><b>До остановки бура:</b></span>
      <br />
      <h2>{{ shutdownTime }}</h2>
    </div>
    <br />
    <h3>Журнал:</h3>
    <div v-for="record in journal" :key="record">
      <span
        >{{ record.time }} ({{ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[record.tile.i] }}
        {{ record.tile.j + 1 }}) {{ getTypeName(record.type) }}</span
      >
      <br />
      <span v-if="record.msg" style="font-size: 90%; font-weight: bold">{{
        record.msg
      }}</span>
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
  data: () => ({
    fullscreen: false,
  }),
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
          return "глаз";
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
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
      const elem = document.documentElement;
      if (this.fullscreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
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
