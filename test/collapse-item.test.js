let expect = chai.expect;
import Vue from 'vue'
import collapseItem from '../src/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('collapseItem', () => {
    it('存在', () => {
        expect(collapseItem).to.be.ok
    })
    describe('props', () => {
        let vm
        const Constructor = Vue.extend(collapseItem)
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接收 title', () => {
            vm = new Constructor({
                propsData: {
                    title: '147'
                }
            }).$mount()
            expect(vm.$el.innerText.trim()).to.eq('147')
        })
        })

})