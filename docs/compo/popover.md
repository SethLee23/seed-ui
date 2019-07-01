---
title: 'popover'
---
# popover -- 弹出框
## 示例
<ClientOnly>
<popover-demos/>
</ClientOnly>

## Attributes
### popover

|   参数   | 说明     |  类型  |              可选值              | 默认值 |
|:--------:|----------|:------:|:--------------------------------:|:------:|
| position | 浮层位置 | string | "top", "left", "right", "bottom" | "top"  |
| trigger | 以何种方式激活浮层 | string | "click","hover" | "click"  |

## 引入组件
```js
import {Popover, Button} from "seed-ui-work";
export default {
  name: "popover-demos",
  data() {
    return {
    };
  },
  components: {
    "s-popover": Popover,
    "s-button": Button,
  }
};
```
## 注意事项
* 如果需要使用 button 组件，需要手动引入。