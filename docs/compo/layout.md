---
title: 'layout'
---
# layout -- 布局
## 示例
<ClientOnly>
<layout-demos/>
</ClientOnly>


## 引入组件
```js
import {LayoutContent,LayoutFooter,LayoutHeader,LayoutSider,Layout} from "seed-ui-work";
export default {
  name: "layout-demos",
  data() {
    return {
    };
  },
  components: {
    "s-layout": Layout,
    "s-layout-content": LayoutContent,
    "s-layout-footer": LayoutFooter,
    "s-layout-sider": LayoutSider,
    "s-layout-header": LayoutHeader,
    "s-showcode": ShowCode
  }
};
```

### 注意事项：
* 除了前文提到的需要添加的 css 式样，请注意本组件提供的仅是布局的框架，你需要自己定下你所需要的高度以及宽度