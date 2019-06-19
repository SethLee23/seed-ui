const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs.head.vue'
import TabsBody from '../src/tabs/tabs.body.vue'
import TabsItem from '../src/tabs/tabs.item.vue'
import TabsPane from '../src/tabs/tabs.pane.vue'


Vue.config.productionTip = false
Vue.config.devtools = false
//  describe 和 it 由 mocha 提供、sinon.fake 以及 expect、calledWidth 都是 sinon-chai 提供
describe('TabsItem', () => {
    it('TabsItem存在.', () => {
        expect(TabsItem).to.be.ok
    })

    describe('props', () => {
        it('可以接受name',()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    name: 'xxx',
                }
            }).$mount()
            const element = vm.$el
            expect(element.getAttribute('data-name')).to.eq('xxx')
        })
        it('click 可以传递到父组件',()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
            }).$mount()
            const element = vm.$el
            const callback = sinon.fake()
            vm.$on('click',callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })
   
    })

})