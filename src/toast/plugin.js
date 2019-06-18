import Toast from './toast'
export default {

install = function(Vue,options){
    Vue.prototype.$toast = function (str,clientOptions) {
      let constructor = Vue.extend(Toast)
      }
}
}