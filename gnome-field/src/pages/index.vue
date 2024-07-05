<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="600">
      <h1 align="center">Enter password</h1>
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          variant="solo"
          hint="Enter your password to access this website"
        ></v-text-field>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import { useAppStore } from "@/stores/app";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const store = useAppStore();
    return { store };
  },
  mounted() {
    this.store.login();
    this.$router.push("/field");
  },
  data: () => ({
    password: "",
    show: false,
  }),
  methods: {
    hash(str) {
      let hash = 0;
      if (str.length === 0) {
        return hash;
      }
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash;
      }
      return hash;
    },
    submit() {
      if (this.hash(this.password) === 1216985755) {
        this.store.login();
        this.$router.push("/field");
      } else {
        alert("Incorrect password");
      }
    },
  },
});
</script>
