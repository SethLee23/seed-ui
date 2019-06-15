import Vue from 'vue'
import Button from './button/Button'
Vue.component('s-button',Button)

new Vue({
    el: '#app',
    methods: {
      sayHi(){
        console.log('hihihi')
      }
    }
  })