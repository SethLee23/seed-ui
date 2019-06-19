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
    // describe('props', () => {
    //     it('可以接收autoclose', (done) => {
    //         let Constructor = Vue.extend(Toast)
    //         let vm = new Constructor({
    //             propsData: {
    //                 autoClose: 1,
    //             }
    //         }).$mount()
    //         vm.$on('close',()=>{
    //             expect(document.body.contains(vm.$el)).to.eq(false) 
    //             done()
    //         })
    //     })
    //     it('可以接收closeButton', () => {
    //         const callback = sinon.fake();
    //         let Constructor = Vue.extend(Toast)
    //         let vm = new Constructor({
    //             propsData: {
    //                 closeButton: {
    //                   text: '关闭',
    //                   callback,
    //                 },
    //               }
    //         }).$mount()
    //        let closeButton = vm.$el.querySelector('.close')
    //        expect(closeButton.textContent.trim()==='关闭').to.be.ok
    //        closeButton.click()
    //        expect(callback).to.have.been.called
    //     })
    //     it('接受 enableHtml', () => {
    //         const Constructor = Vue.extend(Toast)
    //         const vm = new Constructor({
    //           propsData: {enableHtml: true}
    //         })
    //         vm.$slots.default = ['<strong id="test">hi</strong>']
    //         vm.$mount()
    //         let strong = vm.$el.querySelector('#test')
    //         expect(strong).to.exist
    //       })
    //     it('接受 position', () => {
    //         const Constructor = Vue.extend(Toast)
    //         const vm = new Constructor({
    //           propsData: {position: 'middle'}
    //         }).$mount()
    //         expect(vm.$el.classList.contains('position-middle')).to.be.ok
    //       })
    // })

})