# 开始使用

1. 添加css样式
* 安装使用本框架前，请在 css 中使用 border-box
```css
* , *::before, *::after{box-sizing: border-box;}
```
IE 8 及以上都支持此样式。
* 由于本框架的样式是使用的 less 语法，请在使用此框架前安装 less 以及 less-loader 
```
yarn add less
yarn add less-loader --save-dev
```
2. 安装 seed-ui-work
```
npm i --save seed-ui-work
```
或者
```
yarn add seed-ui-work
```
3. 局部引入组件
```js
import { Button, ButtonGroup, Icon } from "seed-ui-work";

export default {
  name: "app",
  components: {
    "s-button": Button,
    "s-button-group": ButtonGroup,
  }
};
```
4. 全局注册组件
```js
Vue.component('s-icon',Icon)
``` 
                                  
## 使用button组件
1. 引入后按需使用
```html
<s-button icon="download" position="right">
      欢迎使用咕噜
</s-button>
```
2. 使用 s-icon
```html
<s-icon name="download"></s-icon>
```
