<template>
  <div>
    <h4>1. 多个菜单同时打开</h4>
    <s-collapse :selected.sync="selectedTab1">
      <s-collapse-item title="第一个" name="1">内容一</s-collapse-item>
      <s-collapse-item title="第二个" name="2">内容二</s-collapse-item>
      <s-collapse-item title="第三个" name="3">内容三</s-collapse-item>
    </s-collapse>
    <s-showcode :code.sync="code1"></s-showcode>

    <h4>2. 单个菜单打开</h4>
    <s-collapse :selected.sync="selectedTab2" singel>
      <s-collapse-item title="第一个" name="1">内容一</s-collapse-item>
      <s-collapse-item title="第二个" name="2">内容二</s-collapse-item>
      <s-collapse-item title="第三个" name="3">内容三</s-collapse-item>
    </s-collapse>
    <s-showcode :code.sync="code2"></s-showcode>
  </div>
</template>

<script>
import CollapseItem from "../../../src/collapse/collapse-item.vue";
import Collapse from "../../../src/collapse/collapse";
import ShowCode from "../../../src/showCode";
export default {
  name: "collapse-demos",
  data() {
    return {
      selectedTab1: ["1", "2"],
      selectedTab2: ["1"],
      code1: `
    <s-collapse :selected.sync="selectedTab1">
      <s-collapse-item title="第一个" name="1">内容一</s-collapse-item>
      <s-collapse-item title="第二个" name="2">内容二</s-collapse-item>
      <s-collapse-item title="第三个" name="3">内容三</s-collapse-item>
    </s-collapse>
      `.replace(/(^\s)+|(\s*$)+/g, ""),
      code2: `
    <s-collapse :selected.sync="selectedTab2" singel>
      <s-collapse-item title="第一个" name="1">内容一</s-collapse-item>
      <s-collapse-item title="第二个" name="2">内容二</s-collapse-item>
      <s-collapse-item title="第三个" name="3">内容三</s-collapse-item>
    </s-collapse>`.replace(/(^\s)+|(\s*$)+/g, "")
    };
  },
  components: {
    "s-collapse": Collapse,
    "s-collapse-item": CollapseItem,
    "s-showcode": ShowCode
  }
};
</script>

<style lang="less">
</style>

