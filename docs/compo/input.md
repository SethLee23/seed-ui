---
title: 'input'
---
# input -- 输入框

## 示例
<ClientOnly>
<input-demos/>
</ClientOnly>

## Attributes:

| 参数        |     说明     |  类型   | 可选值 | 默认值 |
|:-------------:|------------|:-------:|:------:|:------:|
| icon        |   图标类名   | string  |   -    |   -    |
| value       | 输入框默认值 | string  |   -    |   -    |
| placeholder | 输入框提示值 | string  |   -    |   -    |
| clearable   | 是否可以清除 | boolean |   -    | false  |
| disabled    |   禁用状态   | boolean |   -    | false  |
| readonly    |   只读状态   | boolean |   -    | false  |
| error       |   错误信息   | string  |   -    |   -    |

## 引入组件
```js
import {Input} from "seed-ui-work";

export default {
  name: "input-demos",
  data() {
    return {
      message: "我是 message",
    };
  },
  components: {
    "s-input": Input,
  }
};
```
### 注意事项：
* 使用本组件时，必须加上以下 css 样式
```css
* , 
*::before, 
*::after{
    box-sizing: border-box;
    }

body {
    margin: 0;
    padding: 0;
  }
```
IE 8 及以上都支持此样式。

* 如果需要修改 input 的 margin 请在外侧加上一层 div 来增加样式，请勿直接更改。
