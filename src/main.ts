import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createHead());

app.mount("#app");
