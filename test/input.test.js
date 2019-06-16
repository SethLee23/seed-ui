let expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input/input'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        let vm
        const Constructor = Vue.extend(Input)
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: '147'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('147')
        })
        it('可以接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('可以接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'error',
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errmsg = vm.$el.querySelector('.errmsg')
            expect(errmsg.innerText.trim()).to.equal('error')
        })
        it('可以接收icon', () => {
            vm = new Constructor({
                propsData: {
                    icon: 'setting',
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
        })
        it('可以接收placeholder', () => {
            Vue.component('s-input',Input)
            const div = document.createElement('div')
            document.body.appendChild(div)
          div.innerHTML = `
          <s-input placeholder="加入icon"></s-input>`
          vm = new Vue({
              el: div,
          })
          const inputElement = vm.$el.querySelector('input')
          expect(inputElement.placeholder).eq('加入icon')
        })
})
})
