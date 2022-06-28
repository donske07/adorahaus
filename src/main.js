import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faShop,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VideoBackground from "vue-responsive-video-background-player";

library.add(
  faPhone,
  faEnvelope,
  faShop,
  faTimes,
  faBars,
  faInstagram,
  faFacebook
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("video-background", VideoBackground)
  .mount("#app");
