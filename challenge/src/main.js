import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from './router';


const app = new Vue ({
	el: "#app",
	render: h => h(App),
	store,
  router
})
