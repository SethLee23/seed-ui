import Vue from 'vue'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Input from './input/input'

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

Vue.component('s-button',Button)
Vue.component('s-button-group',ButtonGroup)
Vue.component('s-input',Input)

new Vue({
    el: '#app',
    data: {
      message: '11111',
    },
    methods: {
      sayHi(){
        console.log('hihihi')
      }
    }
  })