import Vue from 'nativescript-vue'
import Home from './views/Home'
import Auth from './views/auth/Auth'
import axios from 'axios'
import * as applicationSettings from 'tns-core-modules/application-settings'
import UserService from '~/services/user.service'

axios.defaults.baseURL = 'http://192.168.13.6:3000/api/'

const userService = new UserService(axios)

Vue.prototype.$http = axios
Vue.prototype.$storage = applicationSettings
Vue.prototype.$userService = userService

// new Vue({
//   template: `
//     <Frame>
//       <Auth/>
//     </Frame>`,

//   components: {
//     Auth
//   }
// }).$start();

new Vue({
  render: h => h('frame', [h(applicationSettings.getString('token') ? Home : Home)]),
}).$start();