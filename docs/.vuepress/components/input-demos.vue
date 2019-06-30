<template>
  <div>
    <h4>1. 默认输入框</h4>
    <div class="wrapper">
      <s-input></s-input>
    </div>
    <s-showcode :code.sync="code1"></s-showcode>

    <h4>2. 接收 placeholder</h4>
    <div class="wrapper">
      <s-input placeholder="placeholder"></s-input>
    </div>
    <s-showcode :code.sync="code4"></s-showcode>

    <h4>3. 禁用状态</h4>
    <div class="wrapper">
      <s-input disabled placeholder="disabled"></s-input>
      <s-input readonly placeholder="readonly"></s-input>
    </div>
    <s-showcode :code.sync="code2"></s-showcode>

    <h4>4. 错误提示</h4>
    <div class="wrapper">
      <s-input error="密码错误，请重新输入"></s-input>
    </div>
    <s-showcode :code.sync="code3"></s-showcode>

    <h4>5. 可清空</h4>
    <div class="wrapper">
      <s-input clearable placeholder="clearable"></s-input>
    </div>
    <s-showcode :code.sync="code5"></s-showcode>

    <h4>6. 带有 icon 图标</h4>
    <div class="wrapper">
      <s-input icon="magnifier" placeholder="加入icon"></s-input>
    </div>
    <s-showcode :code.sync="code6"></s-showcode>

    <h4>7. 接收 v-model</h4>
    <div class="wrapper">
      <s-input v-model="message"></s-input>
    </div>
    <s-showcode :code.sync="code7"></s-showcode>
  </div>
</template>

<script>
import Input from "../../../src/input/input";
import ShowCode from "../../../src/showCode";
export default {
  name: "input-demos",
  data() {
    return {
      message: "我是 message",
      code1: `<s-input></s-input>
      `.replace(/(^\s*)+|(\s*$)+/g, ""),
      code2: `
      <s-input disabled placeholder="disabled"></s-input>
      <s-input readonly placeholder="readonly"></s-input>
      `.replace(/(^\s)+|(\s*$)+/g, ""),
      code3: `<s-input error="密码错误，请重新输入"></s-input>
      `.replace(/(^\s*)+|(\s*$)+/g, ""),
      code4: `<s-input placeholder="placeholder"></s-input>
      `.replace(/(^\s*)+|(\s*$)+/g, ""),
      code5: `<s-input clearable placeholder="clearable"></s-input>
      `.replace(/(^\s*)+|(\s*$)+/g, ""),
      code6: `
      <s-input icon="magnifier" placeholder="加入icon"></s-input>
      `.replace(/(^\s*)+|(\s*$)+/g, ""),
      code7: `
      <s-input v-model="message"></s-input>
      `.replace(/(^\s*)+|(\s*$)+/g, "")
    };
  },
  components: {
    "s-input": Input,
    "s-showcode": ShowCode
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>

