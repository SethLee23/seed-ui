---
title: 'icon'
---
# icon -- 图标
## 示例
<ClientOnly>
<icon-demos/>
</ClientOnly>

## Attributes

|参数           |说明           |类型     |可选值  |默认值 |
|:-------------:|------------|:-------:|:------:|:------:|
| name | 图标名 | string | - | - |

## 引入组件
```js
import {Icon} from "seed-ui-work";
export default {
  name: "icon-demos",
  data() {
    return {
    };
  },
  components: {
    "s-icon": Icon,
  } 
};
```
## 注意事项
* 图标类名为 s-icon，如果需要更改图标样式，见下例所示
```css
.s-icon {
  width: 1.5em;
  height: 1.5em;
  margin: 0 20px;
  line-height: 1;
}
```
* 上文图标集合中图标下就是对应的图标名