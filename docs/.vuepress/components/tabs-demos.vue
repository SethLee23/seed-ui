<template>
  <div>
    <h4>基础用法</h4>
    <s-tabs :selected.sync="selectedTab" @update:selected="updateMessage">
      <s-tabs-head>
        <s-tabs-item name="woman">美女</s-tabs-item>
        <s-tabs-item name="finance">财经</s-tabs-item>
        <s-tabs-item name="sports">体育</s-tabs-item>
      </s-tabs-head>
      <s-tabs-body>
        <s-tabs-pane name="woman">美女相关资讯</s-tabs-pane>
        <s-tabs-pane name="finance">财经相关资讯</s-tabs-pane>
        <s-tabs-pane name="sports">体育相关资讯</s-tabs-pane>
      </s-tabs-body>
    </s-tabs>
    <s-showcode :code.sync="code1"></s-showcode>
  </div>
</template>

<script>
import TabsBody from "../../../src/tabs/tabs.body";
import TabsHead from "../../../src/tabs/tabs.head";
import TabsItem from "../../../src/tabs/tabs.item";
import TabsPane from "../../../src/tabs/tabs.pane";
import Tabs from "../../../src/tabs/tabs";
import ShowCode from "../../../src/showCode";

export default {
  name: "tabs-demos",
  data() {
    return {
      selectedTab: "woman",
      code1: `
      <s-tabs :selected.sync="selectedTab" @update:selected="updateMessage">
        <s-tabs-head>
          <s-tabs-item name="woman">美女</s-tabs-item>
          <s-tabs-item name="finance">财经</s-tabs-item>
          <s-tabs-item name="sports">体育</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
          <s-tabs-pane name="woman">美女相关资讯</s-tabs-pane>
          <s-tabs-pane name="finance">财经相关资讯</s-tabs-pane>
          <s-tabs-pane name="sports">体育相关资讯</s-tabs-pane>
        </s-tabs-body>
      </s-tabs>
        `.replace(/(^\s)+|(\s*$)+/g, "")
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
</script>

<style lang="less">
</style>

