import Toast from './toast'
export default {
    install(Vue, options) {
        // 创建一个toast组件
        let toast
        Vue.prototype.$toast = function (clientOptions) {
            if (toast) {
                console.log('toast 存在且删除')
                toast.close()
            }
            toast = createToast(Vue, clientOptions)
        }
    }
}
/*helper*/
function createToast(Vue, clientOptions) {
    let constructor = Vue.extend(Toast)
    let toast = new constructor({
        propsData: clientOptions,
    })
    // toast.$slots.default = clientOptions.toastMsg
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}