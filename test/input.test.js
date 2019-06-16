let expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input/input'

66
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
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('147')
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
            Vue.component('s-input', Input)
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
        it('可以接收clearable', (done) => {
            vm = new Constructor({
                propsData: {
                    clearable: true,
                    value: '147'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-cha')

            const deleteElement = vm.$el.querySelector('.delete')
            const inputElement = vm.$el.querySelector('input')
            deleteElement.click()
            vm.$nextTick(() => {
                expect(inputElement.value).to.equal('')
                done()
            })
        })
        it('可以接收position', () => {
            vm = new Constructor({
                propsData: {
                    position: 'right',
                    icon: 'setting',
                }
            }).$mount()
            expect(vm.$el.querySelector('.position-right')).to.be.ok
        })
    })
        // 分组，接收事件，测试事件
        describe('事件', () => {
            let vm
            const Constructor = Vue.extend(Input)
            afterEach(() => {
                vm.$destroy()
            })
            it('支持 change/input/blur 事件', () => {
                // input组件change事件focus触发input change事件，input change事件触发后会调用sinon.fake            
                ['change', 'input', 'blur', 'focus'].forEach(element => {
                    vm = new Constructor().$mount()
                    const callback = sinon.fake();
                    vm.$on(element, callback)
                    let event = new Event(element)
                    // Object.defineProperty(event,prop,value)
                    Object.defineProperty(
                        event,'target', {
                            value:{value: 'hi'}, 
                            enumberable: true
                        }
                    )
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    // callwith(...args)
                    expect(callback).to.have.been.calledWith('hi')
                })
               
            })
        })
})