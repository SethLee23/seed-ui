import Toast from './toast'
export default {

    install(Vue, options) {
        // 创建一个toast组件
        let toast
        Vue.prototype.$toast = function (clientOptions) {
            if (toast) {
                toast.$el.remove()
            }
            let constructor = Vue.extend(Toast)
            toast = new constructor({
                propsData: clientOptions,
            })
            toast.$slots.default = clientOptions.toastMsg
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}