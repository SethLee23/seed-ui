const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button/button'

// 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
Vue.config.productionTip = false
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        //创建构造函数，生成实例，传递需要测试的参数，mount到文档中
        //获取元素，获取元素的属性，使用断言，destroy实例
        const Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
        vm.$destroy()
    })
    it('icon 默认的 order 是 1', () => {
        // 需要测试css就需要mount到div在mount到文档中
        // 获取css属性，getComputedStyle
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 position 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'setting',
            position: 'right'
        }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor().$mount()
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        // vm.$el此时相当于组件
        expect(callback).to.have.been.called

    })
})















