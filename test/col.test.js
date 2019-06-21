const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.component('s-row', Row)
Vue.component('s-col', Col)

Vue.config.productionTip = false
Vue.config.devtools = false

//  describe 和 it 由 mocha 提供、sinon.fake 以及 expect、calledWidth 都是 sinon-chai 提供
describe('Col', () => {
    it('Col存在.', () => {
        expect(Col).to.exist
    })
    //分组，接收参数，测试参数
    describe('props', () => {
        let Constructor = Vue.extend(Col)
        let vm
        afterEach(() => {
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接收span', () => {
            vm = new Constructor({
                propsData: {
                    span: 12,
                }
            }).$mount()
            let col = vm.$el
            expect(col.classList.contains('span-12')).to.eq(true)
        })
        it('可以接收offset', () => {
            vm = new Constructor({
                propsData: {
                    offset: 2,
                }
            }).$mount()
            let col = vm.$el
            expect(col.classList.contains('offset-2')).to.eq(true)
        })
        it('可以接收ipad', () => {
            vm = new Constructor({
                propsData: {
                    ipad: {span:10,offset:2},
                }
            }).$mount()
            let col = vm.$el
            expect(col.classList.contains('ipad-offset-2')).to.eq(true)
            expect(vm.$el.classList.contains('ipad-span-10')).to.eq(true)
        })
        it('可以接收narrowPc', () => {
            vm = new Constructor({
                propsData: {
                    narrowPc: {span:10,offset:2},
                }
            }).$mount()
            let col = vm.$el
            expect(col.classList.contains('narrowPc-offset-2')).to.eq(true)
            expect(vm.$el.classList.contains('narrowPc-span-10')).to.eq(true)
        })
        it('可以接收pc', () => {
            vm = new Constructor({
                propsData: {
                    pc: {span:10,offset:2},
                }
            }).$mount()
            let col = vm.$el
            expect(col.classList.contains('pc-offset-2')).to.eq(true)
            expect(vm.$el.classList.contains('pc-span-10')).to.eq(true)
        })
        it('可以接收widePc', () => {
            vm = new Constructor({
                propsData: {
                    widePc: {span:10,offset:2},
                }
            }).$mount()
            let col = vm.$el
            expect(col.classList.contains('widePc-offset-2')).to.eq(true)
            expect(vm.$el.classList.contains('widePc-span-10')).to.eq(true)
        })
    })

})