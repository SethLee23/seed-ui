import Vue from 'vue'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs.head'
import TabsItem from './tabs/tabs.item'
import TabsPane from './tabs/tabs.pane'
import TabsBody from './tabs/tabs.body'

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

Vue.component('s-button',Button)
Vue.component('s-button-group',ButtonGroup)
Vue.component('s-input',Input)
Vue.component('s-tabs',Tabs)
Vue.component('s-tabs-head',TabsHead)
Vue.component('s-tabs-item',TabsItem)
Vue.component('s-tabs-pane',TabsPane)
Vue.component('s-tabs-body',TabsBody)

new Vue({
    el: '#app',
    data: {
      message: '11111',
      selectedTab: 'woman',

    },
    methods: {
      sayHi(){
        console.log('hihihi')
      },
      yyy(){
        // console.log(123)
      }
    }
  })