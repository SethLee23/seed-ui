<template>
  <div>
    <h4>1. 顶部-侧边布局-通栏</h4>
    <s-layout style="color: white; overflow:hidden;">
      <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
      <s-layout>
        <s-layout-sider style=" background:#3B3B98; width:200px;">sider</s-layout-sider>
        <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
      </s-layout>
      <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
    </s-layout>
    <s-showcode :code.sync="code1"></s-showcode>

    <h4>2. 顶部-侧边布局</h4>
    <s-layout style="color: white; overflow:hidden;">
      <s-layout-sider style=" background:#3B3B98; width:200px;">sider</s-layout-sider>
      <s-layout>
        <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
        <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
        <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
      </s-layout>
    </s-layout>
    <s-showcode :code.sync="code2"></s-showcode>

    <h4>3. 上、中、下布局</h4>
    <s-layout style="color: white; overflow:hidden;">
      <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
      <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
      <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
    </s-layout>
    <s-showcode :code.sync="code3"></s-showcode>
  </div>
</template>

<script>
import LayoutContent from "../../../src/layout/layout-content";
import LayoutFooter from "../../../src/layout/layout-footer";
import LayoutHeader from "../../../src/layout/layout-header";
import LayoutSider from "../../../src/layout/layout-sider";
import Layout from "../../../src/layout/layout";
import ShowCode from "../../../src/showCode";

export default {
  name: "layout-demos",
  data() {
    return {
        code1: `
    <s-layout style="color: white; overflow:hidden;">
      <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
      <s-layout>
        <s-layout-sider style=" background:#3B3B98; width:200px;">sider</s-layout-sider>
        <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
      </s-layout>
      <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
    </s-layout>
     `.replace(/(^\s)+|(\s*$)+/g, ""),
        code2: `
    <s-layout style="color: white; overflow:hidden;">
      <s-layout-sider style=" background:#3B3B98; width:200px;">sider</s-layout-sider>
      <s-layout>
        <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
        <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
        <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
      </s-layout>
    </s-layout>
     `.replace(/(^\s)+|(\s*$)+/g, ""),
        code3: `
    <s-layout style="color: white; overflow:hidden;">
      <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
      <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
      <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
    </s-layout>
     `.replace(/(^\s)+|(\s*$)+/g, ""),
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

