import Vue from "vue";
import App from "./App.vue";
import compositionApi from "@vue/composition-api"
// import router from "./router"
// import VueRouter from "@microProject/router"

// console.log(`VueRouter:`, VueRouter)

Vue.config.productionTip = false;

// Vue.use(VueRouter)

Vue.use(compositionApi)

new Vue({
    // router,
    render: (h) => h(App),
}).$mount("#emp-root");
