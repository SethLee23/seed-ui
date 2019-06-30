---
title: 'toast'
---
# toast -- 轻提示
## 示例
<ClientOnly>
<toast-demos/>
</ClientOnly>

## 使用 toast 插件
```js
import Vue from "vue";
import {plugin, Button} from "seed-ui-work";
Vue.use(plugin);

export default {
  name: "toast-demos",
  data() {
    return {
    };
  },
  components: {
    "s-button": Button,
  },
  methods: {
    testTop() {
      this.$toast({
        toastMsg: "<strong>我是toast</strong>",
        autoClose: 10,
        enableHTML: true,
        toastPosition: "top",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testLeft() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 10,
        enableHTML: true,
        toastPosition: "left",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testRight() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 10,
        enableHTML: false,
        toastPosition: "right",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testBottom() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 1,
        enableHTML: false,
        toastPosition: "bottom",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testCenter() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 1,
        enableHTML: false,
        toastPosition: "center",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    }
  }
};
```
## Attributes:
### toast

|     参数      | 说明                     |     类型      | 可选值                                     |                  默认值                   |
|:-------------:|--------------------------|:-------------:|--------------------------------------------|-----------------------------------------|
|   toastMsg    | 浮层内容                 |    string     | -                                          |                     -                     |
| toastPosition | 浮层位置                 |    string     | "top", "bottom", "center", "left", "right" |                   "top"                   |
|   autoClose   | 自动关闭浮层（单位：秒） | number/string | -                                          |                     1                     |
|  enableHTML   | 是否接收 HTML            |    boolean    | -                                          |                   false                   |
|  closeButton  | 配置关闭按钮             |    object     | -                                          | {closeText: "关闭",callbacks: undefined}; |

## 注意事项
* 本插件通过把 toast 添加到 Vue.prototype 上实现添加 Vue 实例方法
* 使用插件
通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
```js
Vue.use(plugin)

new Vue({
  // ...组件选项
  methods: {
      test: this.$toast({someOption})
  }
})
```
也可以传入一个可选的选项对象：
```js
Vue.use(plugin, { someOption: true })
```