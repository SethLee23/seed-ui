---
title: 'tabs'
---
# tabs -- 标签页
## 示例
<ClientOnly>
<tabs-demos/>
</ClientOnly>

## Attributes
### tabs
|   参数   | 说明                                |  类型  | 可选值 | 默认值 |
|:--------:|-------------------------------------|:------:|:------:|:------:|
| selected | 选择展示指定页面，值为指定项的 name | string |   -    |   -    |

### tabsItem
| 参数 | 说明                                             |  类型  | 可选值 | 默认值 |
|:----:|--------------------------------------------------|:------:|:------:|:------:|
| name | 必选项，标题栏名称，值应当同对应的内容栏名称相同 | string |   -    |   -    |

## tabsPane
| 参数 | 说明                                             |  类型  | 可选值 | 默认值 |
|:----:|--------------------------------------------------|:------:|:------:|:------:|
| name | 必选项，内容栏名称，值应当同对应的标题栏名称相同 | string |   -    |   -    |
## 引入组件
```js
import {TabsBody , TabsHead , TabsItem, TabsPane, Tabs} from "seed-ui-work";
export default {
  name: "tabs-demos",
  data() {
    return {
    selectedTab: "woman",
    };
  },
  methods: {
    updateMessage() {
      console.log("update");
    }
  },
  components: {
    "s-tabs": Tabs,
    "s-tabs-head": TabsHead,
    "s-tabs-item": TabsItem,
    "s-tabs-body": TabsBody,
    "s-tabs-pane": TabsPane,
    "s-showcode": ShowCode
  }
};
```
