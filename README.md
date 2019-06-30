# seed-ui-work
[![Build Status](https://travis-ci.org/SethLee23/seed-ui.svg?branch=master)](https://travis-ci.org/SethLee23/seed-ui)

## 介绍
学习 Vue 过程中做的一个非常简单的 ui 库，持续更新中
## 开始使用

1. 添加css样式
* 安装使用本框架前，请在 css 中使用 border-box
```css
* , *::before, *::after{box-sizing: border-box;}
```
IE 8 及以上都支持此样式。
* 由于本框架的样式是使用的 scss 语法，请在使用此框架前安装 sass 以及 sass-loader 
```
yarn add sass
yarn add sass-loader --save-dev
```
2. 安装 seed-ui-work
```
npm i --save seed-ui-work
```
或者
```
yarn add seed-ui-work
```
3. 引入 seed-ui-work
```
import { Button, ButtonGroup, Icon } from "seed-ui-work";

export default {
  name: "app",
  components: {
    "s-button": Button,
    "s-button-group": ButtonGroup,
  }
};
```
4. 全局注册 s-icon
```
Vue.component('s-icon',Icon)
``` 
## 文档
### 使用button组件
1. 引入后按需使用 <s-button> 
```
<s-button icon="download" position="right">
      欢迎使用咕噜
</s-button>
```
2. 使用 s-icon
```
<s-icon name="download"></s-icon>
```



