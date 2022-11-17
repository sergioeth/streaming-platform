import { createApp } from "vue";
import { store, key } from "./stores/auth";
import router from "./router";
import { createAuth0 } from "@auth0/auth0-vue";
import { domain, clientId } from "./constants/auth_config";
import "./style.css";
import App from "./App.vue";

createApp(App)
  .use(store, key)
  .use(router)
  .use(
    createAuth0({
      domain: domain,
      client_id: clientId,
      redirect_uri: window.location.origin + "/login",
    })
  )
  .mount("#app");
