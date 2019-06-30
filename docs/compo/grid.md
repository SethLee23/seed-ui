---
title: 'grid'
---
# grid -- 栅格

<ClientOnly>
<grid-demos/>
</ClientOnly>

## Attributes:
### row
|  参数  | 说明         |  类型   | 可选值 | 默认值 |
|:------:|--------------|:-------:|:------:|:------:|
| gutter | 分栏间隔     | string/number |  -|-   |
| aligns | 文本对齐方式 | string  |   -    |  "left","center","right"  |

### col
|   参数   | 说明                                  |  类型   | 可选值 | 默认值 |
|:--------:|---------------------------------------|:-------:|:------:|:------:|
|   span   | 分栏占据列数                          | string/number |   -    |
|  offset  | 分栏偏移列数                          | string/number | - |  0    |
|   ipad   | >=577px 响应式栅格数或者栅格属性对象  | object  |   -    |   -    |
| narrowPc | >=769px 响应式栅格数或者栅格属性对象  | object  |   -    |   -    |
|    pc    | >=993px 响应式栅格数或者栅格属性对象  | object  |   -    |   -    |
|  widePc  | >=1201px 响应式栅格数或者栅格属性对象 | object  |   -    |   -    |
* 注意：本组件是mobile-first，因此默认接收 span、offset时是手机布局方式
## 引入组件
```js
import {Row, Col} from "seed-ui-work";
export default {
  name: "grid-demos",
  data() {
    return {
    };
  },
  components: {
    "s-row": Row,
    "s-col": Col,
  }
};
```
### 注意事项：
* 如果需要修改样式，请在外侧加上一层 div或者在 col 组件内部添加一个 div 来增加样式，请勿直接更改。
* 本组件是采用 24 栏布局，假如你需要一个两栏等分布局，只需要添加 span = "12" 即可，按需修改。