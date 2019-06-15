import Vue from 'vue'
import Button from './button/button'
import ButtonGroup from './button/button-group'

Vue.component('s-button',Button)
Vue.component('s-button-group',ButtonGroup)

new Vue({
    el: '#app',
    methods: {
      sayHi(){
        console.log('hihihi')
      }
    }
  })