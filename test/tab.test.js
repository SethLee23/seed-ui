let expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs.head.vue'
import TabsBody from '../src/tabs/tabs.body.vue'
import TabsItem from '../src/tabs/tabs.item.vue'
import TabsPane from '../src/tabs/tabs.pane.vue'
// 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
Vue.config.productionTip = false
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    describe('props', () => {
        it('可以接受selected',(done)=>{
            Vue.component('g-tabs-head', TabsHead)
            Vue.component('g-tabs-body', TabsBody)
            Vue.component('g-tabs-item', TabsItem)
            Vue.component('g-tabs-pane', TabsPane)
            Vue.component('g-tabs', Tabs)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-tabs selected="sports">
              <g-tabs-head>
                <template slot="actions">
                  <button>设置</button>
                </template>
                <g-tabs-item name="woman">
                  美女
                </g-tabs-item>
                <g-tabs-item name="finance">财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
              </g-tabs-head>
              <g-tabs-body>
                <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
              </g-tabs-body>
            </g-tabs>
                `
            const vm = new Vue({
                el: div,
            })
            setTimeout(()=>{
                const sports = vm.$el.querySelector('.tabItem[data-name="sports"]')
                expect(sports.classList.contains('active')).to.be.ok
                done()
            },1000) 
        })
   
    })

})















