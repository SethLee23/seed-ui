---
title: 'collapse'
---
# collapse -- 折叠面板
## 示例
<ClientOnly>
<collapse-demos/>
</ClientOnly>

## Attributes:
### collapse

|   参数   | 说明                         |  类型   | 可选值 | 默认值 |
|:--------:|------------------------------|:-------:|:------:|:------:|
|  singel  | 是否只能同时打开一个折叠面板 | boolean |   -    | false  |
| selected | 默认选中项                   |  array  |   -    |   -    |

### collapse-item
| 参数  | 说明                                   |  类型  | 可选值 | 默认值 |
|:-----:|----------------------------------------|:------:|:------:|:------:|
| name  | 必选项，单个折叠面板名，用来匹配选中项 | string |   -    |   -    |
| title | 必选项，标题栏内容                     | string |   -    |   -    |

## 引入组件
```js
import {Collapse, CollapseItem} from "seed-ui-work";
export default {
  name: "collapse-demos",
  data() {
    return {
      selectedTab1: ["1", "2"],
      selectedTab2: ["1"],
    };
  },
  components: {
    "s-collapse": Collapse,
    "s-collapse-item": CollapseItem,
  }
};
```