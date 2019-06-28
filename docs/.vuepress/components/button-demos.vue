<template>
  <div>
    <h4>1.使用默认按钮</h4>
    <p>--接收参数 icon（icon 名字），loading，iconPosition</p>
    <s-button>按钮</s-button>
    <s-button icon="setting">按钮</s-button>
    <s-button :loading="true">按钮</s-button>
    <s-button icon="right" iconPosition="right">按钮</s-button>
    <s-button disabled>按钮</s-button>
    <h4>2.使用按钮组合</h4>
    <p>--直接嵌套 button 组件使用</p>
    <s-button-group>
      <s-button icon="left" iconPosition="left">按钮</s-button>
      <s-button>1</s-button>
      <s-button>2</s-button>
      <s-button>3</s-button>
      <s-button icon="right" iconPosition="right">按钮</s-button>
    </s-button-group>
    <h4>3.使用icon</h4>
    <p>--接收 name 参数</p>
    <s-icon name="setting"></s-icon>
  </div>
</template>

<script>
import ButtonGroup from "../../../src/button/button-group";
import Button from "../../../src/button/button";
import Icon from "../../../src/button/icon";
export default {
  name: 'button-demos',
  data() {
    return {
    
    };
  },
  components: {
    "s-button": Button,
    "s-button-group": ButtonGroup
  }
};
</script>

<style lang="less">
</style>

