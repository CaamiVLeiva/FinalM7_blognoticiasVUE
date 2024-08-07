// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// Importa los componentes y plugins necesarios desde bootstrap-vue-next
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardTitle,
    BCardText,
    BCardFooter,
    BButton,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BNavItem,
    BNavText,
    BCollapse,
} from "bootstrap-vue-next";

const app = createApp(App);

// Usa los componentes y plugins específicos
app.component("BContainer", BContainer);
app.component("BRow", BRow);
app.component("BCol", BCol);
app.component("BCard", BCard);
app.component("BCardBody", BCardBody);
app.component("BCardTitle", BCardTitle);
app.component("BCardText", BCardText);
app.component("BCardFooter", BCardFooter);
app.component("BButton", BButton);
app.component("BNavbar", BNavbar);
app.component("BNavbarBrand", BNavbarBrand);
app.component("BNavbarNav", BNavbarNav);
app.component("BNavbarToggle", BNavbarToggle);
app.component("BNavItem", BNavItem);
app.component("BNavText", BNavText);
app.component("BCollapse", BCollapse);

app.use(router);

app.mount("#app");
