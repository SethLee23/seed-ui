const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast/toast'

Vue.config.productionTip = false
Vue.config.devtools = false
//  describe 和 it 由 mocha 提供、sinon.fake 以及 expect、calledWidth 都是 sinon-chai 提供
describe('Toast', () => {
    it('Toast存在.', () => {
        // expect(Toast).to.be.ok
        expect(Toast).to.exist
    })
    //分组，接收参数，测试参数
    describe('props', () => {
        it('可以接收autoclose', (done) => {
            let Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount()
            // console.log(vm.$el.querySelector('.closeContent'))
            let btn = vm.$el.querySelector('.closeContent')
            setTimeout(() => {
                let event = new Event('click');
                btn.dispatchEvent(event)
                vm.$nextTick(() => {
                    expect(document.body.contains(vm.$el)).to.eq(false)
                    done()
                })
            }, 200)
        })
        it('可以接收closeButton', () => {
            const callbacks = sinon.fake();
            let Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    closeButton: {
                        closeText: '关闭',
                        callbacks,
                    },
                }
            }).$mount()
            let btn = vm.$el.querySelector('.closeContent')
            expect(btn.textContent.trim() === '关闭').to.be.ok
            btn.click()
            expect(callbacks).to.have.been.called
        })
        it('可以接收 toastMsg', () => {
            let Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    // enableHTML: false,
                    toastMsg: '我是toast',
                }
            }).$mount()
            let textContent = vm.$el.querySelector('.textContent')
            expect(textContent.innerText.trim() === '我是toast').to.be.ok
        })
        it('接受 enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHTML: true,
                    toastMsg: '<strong id="test">我是toast</strong>'
                }
            }).$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    toastPosition: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.be.ok
        })
    })

})