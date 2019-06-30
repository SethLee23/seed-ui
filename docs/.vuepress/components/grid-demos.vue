<template>
  <div>
    <h4>1. 基础布局</h4>
    <s-row>
      <s-col span="12">
        <div style="background:#2ECC71">12</div>
      </s-col>
      <s-col span="12">
        <div style="background:#27AE60">12</div>
      </s-col>
    </s-row>
    <br />
    <s-row>
      <s-col span="8">
        <div style="background:#2ECC71">8</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">8</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">8</div>
      </s-col>
    </s-row>
    <br />
    <s-row>
      <s-col span="6">
        <div style="background:#27AE60">6</div>
      </s-col>
      <s-col span="6">
        <div style="background:#2ECC71">6</div>
      </s-col>
      <s-col span="6">
        <div style="background:#27AE60">6</div>
      </s-col>
      <s-col span="6">
        <div style="background:#2ECC71">6</div>
      </s-col>
    </s-row>
    <br />
    <s-row>
      <s-col span="4">
        <div style="background:#2ECC71">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#27AE60">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#2ECC71">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#27AE60">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#2ECC71">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#27AE60">4</div>
      </s-col>
    </s-row>
      <s-showcode :code.sync="code1"></s-showcode>

    <h4>2. 分栏间隔，使用 gutter</h4>
    <s-row gutter="10">
      <s-col span="12">
        <div style="background:#2ECC71">12</div>
      </s-col>
      <s-col span="12">
        <div style="background:#27AE60">12</div>
      </s-col>
    </s-row>
      <s-showcode :code.sync="code2"></s-showcode>

    <h4>3. 分栏偏移，接收 offset</h4>
    <s-row gutter="10">
      <s-col span="8">
        <div style="background:#2ECC71">8</div>
      </s-col>
      <s-col span="8" offset="8">
        <div style="background:#27AE60">8</div>
      </s-col>
    </s-row>
    <br />
    <s-row gutter="20">
      <s-col span="6">
        <div style="background:#27AE60">6</div>
      </s-col>
      <s-col span="6" offset="3">
        <div style="background:#2ECC71">6</div>
      </s-col>
      <s-col span="6" offset="3">
        <div style="background:#27AE60">6</div>
      </s-col>
    </s-row>
      <s-showcode :code.sync="code3"></s-showcode>

    <h4>4. 文本对齐方式</h4>
    <s-row aligns="center">
      <s-col span="8">
        <div style="background:#2ECC71">center</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">center</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">center</div>
      </s-col>
    </s-row>
    <br />
    <s-row aligns="left">
      <s-col span="8">
        <div style="background:#2ECC71">left</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">left</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">left</div>
      </s-col>
    </s-row>
    <br />
    <s-row aligns="right">
      <s-col span="8">
        <div style="background:#2ECC71">right</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">right</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">right</div>
      </s-col>
    </s-row>
    <s-showcode :code.sync="code4"></s-showcode>

    <h4>5. 响应式布局</h4>
    <p>绑定phone、ipad、pc、narrowPc、widePc</p>
    <s-row>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-1</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-2</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-3</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-4</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-5</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-6</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-7</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-8</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-9</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-10</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-11</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-12</div>
      </s-col>
    </s-row>
      <s-showcode :code.sync="code5"></s-showcode>
  </div>
</template>

<script>
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";
import ShowCode from "../../../src/showCode";
export default {
  name: "grid-demos",
  data() {
    return {
      code1: `
    <s-row>
      <s-col span="12">
        <div style="background:#2ECC71">12</div>
      </s-col>
      <s-col span="12">
        <div style="background:#27AE60">12</div>
      </s-col>
    </s-row>

    <s-row>
      <s-col span="8">
        <div style="background:#2ECC71">8</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">8</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">8</div>
      </s-col>
    </s-row>

    <s-row>
      <s-col span="6">
        <div style="background:#27AE60">6</div>
      </s-col>
      <s-col span="6">
        <div style="background:#2ECC71">6</div>
      </s-col>
      <s-col span="6">
        <div style="background:#27AE60">6</div>
      </s-col>
      <s-col span="6">
        <div style="background:#2ECC71">6</div>
      </s-col>
    </s-row>

    <s-row>
      <s-col span="4">
        <div style="background:#2ECC71">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#27AE60">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#2ECC71">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#27AE60">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#2ECC71">4</div>
      </s-col>
      <s-col span="4">
        <div style="background:#27AE60">4</div>
      </s-col>
    </s-row>
    `.replace(/(^\s)+|(\s*$)+/g, ""),
      code2: `
    <s-row gutter="10">
      <s-col span="12">
        <div style="background:#2ECC71">12</div>
      </s-col>
      <s-col span="12">
        <div style="background:#27AE60">12</div>
      </s-col>
    </s-row>
    `.replace(/(^\s)+|(\s*$)+/g, ""),
      code3: `
    <s-row gutter="10">
      <s-col span="8">
        <div style="background:#2ECC71">8</div>
      </s-col>
      <s-col span="8" offset="8">
        <div style="background:#27AE60">8</div>
      </s-col>
    </s-row>

    <s-row gutter="20">
      <s-col span="6">
        <div style="background:#27AE60">6</div>
      </s-col>
      <s-col span="6" offset="3">
        <div style="background:#2ECC71">6</div>
      </s-col>
      <s-col span="6" offset="3">
        <div style="background:#27AE60">6</div>
      </s-col>
    </s-row>
    `.replace(/(^\s)+|(\s*$)+/g, ""),
      code4: `
    <s-row aligns="center">
      <s-col span="8">
        <div style="background:#2ECC71">center</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">center</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">center</div>
      </s-col>
    </s-row>

    <s-row aligns="left">
      <s-col span="8">
        <div style="background:#2ECC71">left</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">left</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">left</div>
      </s-col>
    </s-row>

    <s-row aligns="right">
      <s-col span="8">
        <div style="background:#2ECC71">right</div>
      </s-col>
      <s-col span="8">
        <div style="background:#27AE60">right</div>
      </s-col>
      <s-col span="8">
        <div style="background:#2ECC71">right</div>
      </s-col>
    </s-row>
    `.replace(/(^\s)+|(\s*$)+/g, ""),
      code5: `
    <s-row>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-1</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-2</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-3</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-4</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-5</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-6</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-7</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-8</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-9</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#16A085">hello-10</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#1ABC9C">hello-11</div>
      </s-col>
      <s-col span="12" :ipad="{span:8}" :pc="{span:4}" :narrowPc="{span:6}" :widePc="{span:2}">
        <div style="background:#2ECC71">hello-12</div>
      </s-col>
    </s-row>
    `.replace(/(^\s)+|(\s*$)+/g, "")
    };
  },
  components: {
    "s-row": Row,
    "s-col": Col,
    "s-showcode": ShowCode
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
// .colDemo {
//   background: #3498DB;
//   // border: 1px solid #2980B9;
//   display: flex;
//   justify-content: center;
// }
</style>

