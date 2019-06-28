<template>
  <div>
      <h4>多个菜单同时打开</h4>
    <s-collapse :selected.sync="selectedTab">
      <s-collapse-item title="第一个" name="1">内容一</s-collapse-item>
      <s-collapse-item title="第二个" name="2">内容二</s-collapse-item>
      <s-collapse-item title="第三个" name="3">内容三</s-collapse-item>
    </s-collapse>
    <h4>单个菜单打开</h4>
    <s-collapse :selected.sync="selectedTab" single>
      <s-collapse-item title="第一个" name="1">内容一</s-collapse-item>
      <s-collapse-item title="第二个" name="2">内容二</s-collapse-item>
      <s-collapse-item title="第三个" name="3">内容三</s-collapse-item>
    </s-collapse>
    <p>s-collapse 组件可以接收 selected，接收数组作为参数，表示选中项，可以接收 single 作为参数，接收 Boolean 作为参数，表示是否选择只同时开启一个内容，
 s-collapse组件接收 title，参数为 String，表示标题栏内容，接收 name，参数为 String，表示组件名，以上两项为必选项。
</p>
  </div>
</template>

<script>
import CollapseItem from "../../../src/collapse/collapse-item.vue";
import Collapse from "../../../src/collapse/collapse";
export default {
  name: 'collapse-demos',
  data() {
    return {
      selectedTab: ["1", "2"]
    };
  },
  components: {
    "s-collapse": Collapse,
    "s-collapse-item": CollapseItem
  }
};
</script>

<style lang="less">
</style>

