import Vue from 'vue'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs.head'
import TabsItem from './tabs/tabs.item'
import TabsPane from './tabs/tabs.pane'
import TabsBody from './tabs/tabs.body'
import Layout from './layout/layout'
import LayoutHeader from './layout/layout-header'
import LayoutSider from './layout/layout-sider'
import LayoutContent from './layout/layout-content'
import LayoutFooter from './layout/layout-footer'
import Upload from './picture-bed/upload'
import chai from 'chai'
import spies from 'chai-spies'

import Row from './grid/row'
import Col from './grid/col'

import plugin from './toast/plugin'

Vue.use(plugin)

chai.use(spies)

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-layout', Layout)
Vue.component('s-layout-header', LayoutHeader)
Vue.component('s-layout-sider', LayoutSider)
Vue.component('s-layout-footer', LayoutFooter)
Vue.component('s-layout-content', LayoutContent)
Vue.component('s-upload', Upload)
Vue.component('s-row', Row)
Vue.component('s-col', Col)

new Vue({
  el: '#app',
  data: {
    message: '11111',
    selectedTab: 'woman',

  },
  created() {},
  methods: {
    sayHi() {
      console.log('hihihi')
    },
    testTop() {
      this.$toast({
        toastMsg: '<strong>我是toast</strong>',
        autoClose: 10,
        enableHTML: true,
        toastPosition: 'top',
        closeButton: {
          closeText: 'bye',
          callbacks: () => {
            console.log('我是回调，我被调用了')
          }
        }
      })
    },
    testLeft() {
      this.$toast({
        toastMsg: '我是toast',
        autoClose: 10,
        enableHTML: false,
        toastPosition: 'left',
        closeButton: {
          closeText: 'bye',
          callbacks: () => {
            console.log('我是回调，我被调用了')
          }
        }
      })
    },
    testRight() {
      this.$toast({
        toastMsg: '我是toast',
        autoClose: 10,
        enableHTML: false,
        toastPosition: 'right',
        closeButton: {
          closeText: 'bye',
          callbacks: () => {
            console.log('我是回调，我被调用了')
          }
        }
      })
    },
    testBottom() {
      this.$toast({
        toastMsg: '我是toast',
        autoClose: 10,
        enableHTML: false,
        toastPosition: 'bottom',
        closeButton: {
          closeText: 'bye',
          callbacks: () => {
            console.log('我是回调，我被调用了')
          }
        }
      })
    },
    testCenter() {
      this.$toast({
        toastMsg: '我是toast',
        autoClose: 10,
        enableHTML: false,
        toastPosition: 'center',
        closeButton: {
          closeText: 'bye',
          callbacks: () => {
            console.log('我是回调，我被调用了')
          }
        }
      })
    },
    yyy() {

    }
  }
})