const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.component('s-row', Row)
Vue.component('s-col', Col)

Vue.config.productionTip = false
Vue.config.devtools = false

//  describe 和 it 由 mocha 提供、sinon.fake 以及 expect、calledWidth 都是 sinon-chai 提供
describe('Row', () => {
    it('Row存在.', () => {
        expect(Row).to.exist
    })
    //分组，接收参数，测试参数
    describe('props', () => {
        it('可以接受 gutter', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <s-row gutter=20>
            <s-col span="12"><div>12</div></s-col>
            <s-col span="12"><div>12</div></s-col>
        </s-row>
                `
            const vm = new Vue({
                el: div,
            })
            vm.$nextTick(() => {
                let wrapper = vm.$el.querySelector('.wrapper')
                let col = document.querySelector('.col')
                expect(wrapper.style.marginLeft).to.eq('-10px')
                expect(wrapper.style.marginRight).to.eq('-10px')
                expect(col.style.paddingLeft).to.eq('10px')
                expect(col.style.paddingRight).to.eq('10px')
            })

        })
        it('可以接受 aligns', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <s-row aligns="center">
            <s-col span="12"><div>12</div></s-col>
            <s-col span="12"><div>12</div></s-col>
        </s-row>
                `
            const vm = new Vue({
                el: div,
            })
            vm.$nextTick(() => {
                let col = vm.$el.querySelector('.col')
                expect(col.classList.contains('align-center')).to.equal(true)
            })
        })
    })

})