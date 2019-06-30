---
title: 'button'
---
# button -- 按钮
## 示例
<ClientOnly>
<button-demos/>
</ClientOnly>

## Attributes:
### button

|参数           |说明           |类型     |可选值  |默认值 |
|:-------------:|------------|:-------:|:------:|:------:|
| types | 按钮类型，不同类型背景颜色不同 | string | success/danger/normal | normal |
|icon| 图标类名，详见 icon 组件|string| - | - |
| loading | 按钮加载状态 | boolean | - | false |
| position | 图标位置 | string | left/right | left |
| disabled | 禁用按钮 | boolean | - | false |

### buttonGrounp
将 button 组件直接放在 buttonGroup 组件中就可以直接使用按钮组合

## 引入组件
```js
import {ButtonGroup,Button} from "seed-ui-work";
export default {
  name: "button-demos",
  data() {
    return {
    };
  },
  components: {
    "s-button": Button,
    "s-button-group": ButtonGroup,
  },
};
```