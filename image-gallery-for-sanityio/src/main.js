import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/styles/index.css";

const app = createApp(App);
window.app = app;
app.mount("#app");
