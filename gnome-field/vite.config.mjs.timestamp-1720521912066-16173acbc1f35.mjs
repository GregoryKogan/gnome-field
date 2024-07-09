// vite.config.mjs
import AutoImport from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/unplugin-vue-components/dist/vite.js";
import Fonts from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/unplugin-fonts/dist/vite.mjs";
import Layouts from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Vue from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/unplugin-vue-router/dist/vite.mjs";
import Vuetify, { transformAssetUrls } from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { defineConfig } from "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///Users/gregorykogan/Desktop/gnome-field/gnome-field/vite.config.mjs";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter(),
    Layouts(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Components(),
    Fonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900"
          }
        ]
      }
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 3e3
  },
  base: "/gnome-field/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2dyZWdvcnlrb2dhbi9EZXNrdG9wL2dub21lLWZpZWxkL2dub21lLWZpZWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZ3JlZ29yeWtvZ2FuL0Rlc2t0b3AvZ25vbWUtZmllbGQvZ25vbWUtZmllbGQvdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ncmVnb3J5a29nYW4vRGVza3RvcC9nbm9tZS1maWVsZC9nbm9tZS1maWVsZC92aXRlLmNvbmZpZy5tanNcIjsvLyBQbHVnaW5zXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCBGb250cyBmcm9tIFwidW5wbHVnaW4tZm9udHMvdml0ZVwiO1xuaW1wb3J0IExheW91dHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXCI7XG5pbXBvcnQgVnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInVucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZVwiO1xuaW1wb3J0IFZ1ZXRpZnksIHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZXRpZnlcIjtcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlUm91dGVyKCksXG4gICAgTGF5b3V0cygpLFxuICAgIFZ1ZSh7XG4gICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3ZpdGUtcGx1Z2luI3JlYWRtZVxuICAgIFZ1ZXRpZnkoe1xuICAgICAgYXV0b0ltcG9ydDogdHJ1ZSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBjb25maWdGaWxlOiBcInNyYy9zdHlsZXMvc2V0dGluZ3Muc2Nzc1wiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKCksXG4gICAgRm9udHMoe1xuICAgICAgZ29vZ2xlOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSb2JvdG9cIixcbiAgICAgICAgICAgIHN0eWxlczogXCJ3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxuICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgZGVmaW5lOiB7IFwicHJvY2Vzcy5lbnZcIjoge30gfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbXCIuanNcIiwgXCIuanNvblwiLCBcIi5qc3hcIiwgXCIubWpzXCIsIFwiLnRzXCIsIFwiLnRzeFwiLCBcIi52dWVcIl0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIGJhc2U6IFwiL2dub21lLWZpZWxkL1wiLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sV0FBVywwQkFBMEI7QUFHNUMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlLFdBQVc7QUFYNEssSUFBTSwyQ0FBMkM7QUFjaFEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsSUFBSTtBQUFBLE1BQ0YsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLElBQ2pDLENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxZQUFZO0FBQUEsTUFDN0IsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRLEVBQUUsZUFBZSxDQUFDLEVBQUU7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTLFFBQVEsUUFBUSxPQUFPLFFBQVEsTUFBTTtBQUFBLEVBQ3BFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsTUFBTTtBQUNSLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
