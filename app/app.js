import Vue from 'nativescript-vue'
import Home from './components/Home'
import Auth from './components/Auth'

new Vue({
  template: `
    <Frame>
      <Auth />
    </Frame>`,

  components: {
    Auth
  }
}).$start();
