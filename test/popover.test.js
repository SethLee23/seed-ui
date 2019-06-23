let expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在', () => {
        expect(Popover).to.be.ok
    })
    describe('props', () => {
        let vm
        const Constructor = Vue.extend(Popover)
        afterEach(() => {
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接收position', (done) => {
            vm = new Constructor({
                propsData: {
                    position: 'right',
                }
            }).$mount()
            const triggerElement = vm.$refs.trigger
            triggerElement.click()
            vm.$nextTick(()=>{
                const contentElement = vm.$refs.content
                expect(contentElement.classList.contains('position-right')).to.be.true
                done()
            })
        })
        it('可以设置 trigger', (done) => {
            Vue.component('g-popover', Popover)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-popover trigger="hover" ref="a">
              <template slot="content">
              弹出内容
              </template>
              <button>点我</button>
            </g-popover>
            `
            const vm = new Vue({
              el: div
            })
            setTimeout(() => {
              let event = new Event('mouseenter');
              const trigger =  vm.$refs.a.$refs.trigger
              trigger.dispatchEvent(event)
              vm.$nextTick(() => {
                expect(vm.$refs.a.$refs.content).to.be.exist
                let popover = vm.$refs.a.$refs.popover
                let event2 = new Event('mouseleave');
                popover.dispatchEvent(event2)
                vm.$nextTick(()=>{
                    expect(vm.$refs.a.$refs.content).to.be.not.exist
                })
                done()
              })
            }, 10)
        
          })
        })
})