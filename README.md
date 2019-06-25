# seed-ui-work
[![Build Status](https://travis-ci.org/SethLee23/simple-ui.svg?branch=master)](https://travis-ci.org/SethLee23/simple-ui)

## 介绍
学习 Vue 过程中做的一个非常简单的 ui 库，持续更新中
## 开始使用

1. 添加css样式
* 安装使用本框架前，请在 css 中使用 border-box
```
* , *::before, *::after{box-sizing: border-box;}
```
IE 8 及以上都支持此样式。

* 你需要自定义默认颜色等变量，(后面会更改为 scss 变量)
```
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #999;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式。

2. 安装 simple-ui
```
npm i --save seth23
```

3. 引入 simple-ui
```
import { Button, ButtonGroup, Icon } from "seth23";
import 'seth23/dist/index.css'

export default {
  name: "app",
  components: {
    "g-button": Button
  }
};
```
4. 全局注册 s-icon
```
Vue.component('s-icon',Icon)
``` 
## 文档
### 使用button组件
1. 引入后按需使用 <g-button> 
```
<g-button icon="download" iconPosition="right">
      欢迎使用咕噜
</g-button>
```
2. 使用 s-icon
```
<s-icon name="download"></s-icon>
```
## 安装
## 提问
## 变更记录
## 贡献代码



