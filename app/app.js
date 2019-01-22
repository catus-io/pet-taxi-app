import Vue from 'nativescript-vue'
import Home from './views/Home'
import Auth from './views/auth/Auth'
import axios from 'axios'
import appSettings from 'application-settings'

Vue.prototype.$http = axios
Vue.prototype.$storage = appSettings

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>`,

  components: {
    Home
  }
}).$start();
