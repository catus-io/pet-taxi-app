import Vue from 'nativescript-vue'
import Home from './views/Home'
import Auth from './views/auth/Auth'
import axios from 'axios'
import * as applicationSettings from 'tns-core-modules/application-settings'
import UserService from '~/services/user.service'
import BookService from '~/services/book.service'

axios.defaults.baseURL = 'http://13.209.68.249:3000/api/'

const userService = new UserService(axios)
const bookService = new BookService(axios, applicationSettings)

Vue.prototype.$http = axios
Vue.prototype.$storage = applicationSettings
Vue.prototype.$userService = userService
Vue.prototype.$bookService = bookService

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
  render: h => h('frame', [h(applicationSettings.getString('token') ? Home : Auth)]),
}).$start();