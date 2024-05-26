import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import boxicons from 'boxicons';

Vue.config.productionTip = false

new Vue({
  router,
  boxicons,
  render: h => h(App)
}).$mount('#app')
