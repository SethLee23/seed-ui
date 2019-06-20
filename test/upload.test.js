let expect = chai.expect;
import Vue from 'vue'
import Upload from '../src/picture-bed/Upload'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Upload', () => {
    it('存在.', () => {
        expect(Upload).to.be.ok
    })
    describe('props', () => {
        let vm
        const Constructor = Vue.extend(Upload)
        afterEach(() => {
            vm.$destroy()
        })
        xit('可以接收 uploadurl', () => {
            vm = new Constructor({
                propsData: {
                    uploadurl: 'https://easy-mock.com/mock/5d08939197ae0a474a534950/file/addfile'
                }
            }).$mount()
        })
        })
})