---
title: 'button'
---
# button -- 按钮
使用方法
<ClientOnly>
<button-demos/>
</ClientOnly>
示例：
```js{1,16,25}
    //默认按钮
    <s-button>默认按钮</s-button>
    <s-button icon="setting">
      默认按钮
    </s-button>
    <s-button :loading="true">
      默认按钮
    </s-button>
    <s-button :loading="true" iconPosition="right">
      默认按钮
    </s-button>
    <s-button disabled>
      默认按钮
    </s-button>

     //按钮组合
    <s-button-group>
      <s-button icon="left" iconPosition="left">按钮</s-button>
      <s-button>1</s-button>
      <s-button>2</s-button>
      <s-button>3</s-button>
      <s-button icon="right" iconPosition="right">按钮</s-button>
    </s-button-group>

    //icon
    <p>--接收name参数</p>
    <s-icon name="setting"></s-icon>
```