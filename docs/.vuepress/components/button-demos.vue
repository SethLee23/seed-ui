<template>
  <div>
    <h4>1. 默认按钮</h4>
    <!-- <p>--接收参数 icon（icon 名字），loading，iconPosition</p> -->
    <s-button>按钮</s-button>
    <s-showcode :code.sync="code1"></s-showcode>

    <h4>2. 按钮组合</h4>
    <p>--直接嵌套 button 组件使用</p>
    <s-button-group>
      <s-button icon="left" position="left">按钮</s-button>
      <s-button>1</s-button>
      <s-button>2</s-button>
      <s-button>3</s-button>
      <s-button icon="right" position="right">按钮</s-button>
    </s-button-group>
    <s-showcode :code.sync="code2"></s-showcode>

    <h4>3. 带 icon 的按钮</h4>
    <s-button icon="setting">按钮</s-button>
    <s-button icon="right" position="right">按钮</s-button>
    <s-showcode :code.sync="code3"></s-showcode>

    <h4>4. loading 状态的按钮</h4>
    <s-button :loading="true">按钮</s-button>
    <s-showcode :code.sync="code4"></s-showcode>

    <h4>5. 禁用状态的按钮</h4>
    <s-button disabled>按钮</s-button>
    <s-button readonly>按钮</s-button>
    <s-showcode :code.sync="code5"></s-showcode>

    <h4>6. 圆形按钮</h4>
    <p>--嵌套 icon 使用</p>
    <div id="round-button">
      <s-button types="circle danger" icon="errormsg"></s-button>
      <s-button types="circle normal" icon="setting"></s-button>
      <s-button types="circle success" icon="collection"></s-button>
    </div>
    <s-showcode :code.sync="code6"></s-showcode>

    <h4>7. 不同状态的按钮</h4>
    <div id="rect-button">
      <s-button types="danger" icon="error">error</s-button>
      <s-button types="success" icon="correct">success</s-button>
      <s-button types="normal" icon="message" position="right">normal</s-button>
      <s-button disabled icon="pen">disabled</s-button>
    </div>
    <s-showcode :code.sync="code7"></s-showcode>
  </div>
</template>

<script>
import ButtonGroup from "../../../src/button/button-group";
import Button from "../../../src/button/button";
import Icon from "../../../src/button/icon";
import ShowCode from "../../../src/showCode";
export default {
  name: "button-demos",
  data() {
    return {
      selectedTab: [],
      code1: `
      <s-button>按钮</s-button>
      `.replace(/(^\s)+|(\s*$)+/g, ""),
      code2: `
    <s-button-group>
      <s-button icon="left" position="left">按钮</s-button>
      <s-button>1</s-button>
      <s-button>2</s-button>
      <s-button>3</s-button>
      <s-button icon="right" position="right">按钮</s-button>
    </s-button-group>
      `.replace(/(^\s)+|(\s*$)+/g, ""),
      code3: `
      <s-button icon="setting">按钮</s-button>
      <s-button icon="right" position="right">按钮</s-button>
    `.replace(/(^\s)+|(\s*$)+/g, ""),
    code4: `<s-button :loading="true">按钮</s-button>`.replace(/(^\s)+|(\s*$)+/g, ""),
    code5: `<s-button disabled>按钮</s-button>`.replace(/(^\s*)+|(\s*$)+/g, ""),
    code6: `
      <s-button types="circle danger" icon="errormsg"></s-button>
      <s-button types="circle normal" icon="setting"></s-button>
      <s-button types="circle success" icon="collection"></s-button>`.replace(/(^\s)+|(\s*$)+/g, ""),
    code7: `
      <s-button types="danger" icon="error">error</s-button>
      <s-button types="success" icon="correct">success</s-button>
      <s-button types="normal" icon="message" position="right">normal</s-button>
      <s-button disabled icon="pen">disabled</s-button>`.replace(/(^\s)+|(\s*$)+/g, "")
    };
  },
  components: {
    "s-button": Button,
    "s-button-group": ButtonGroup,
    "s-showcode": ShowCode
  },
  methods: {
  }
};
</script>

<style lang="less">
</style>

