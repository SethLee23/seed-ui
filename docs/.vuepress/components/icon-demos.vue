<template>
  <div>
    <h4>1. 基础用法</h4>
    <div class="s-container">
      <s-icon name="correct"></s-icon>
      <s-icon name="magnifier"></s-icon>
      <s-icon name="message"></s-icon>
      <s-icon name="garbage"></s-icon>
      <s-icon name="check-circle"></s-icon>
      <s-icon name="collection"></s-icon>
      <s-icon name="thumb-up"></s-icon>
    </div>
    <s-showcode :code.sync="code1"></s-showcode>
    <h4>2. 图标集合</h4>
    <div class="iconAndText">
      <div v-for="item in icons" class="icon">
        <s-icon :name="item"></s-icon>
        <div class="iconTitle">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../../src/button/icon";
import ShowCode from "../../../src/showCode";
export default {
  name: "demos",
  data() {
    return {
      code1: `
      <s-icon name="correct"></s-icon>
      <s-icon name="magnifier"></s-icon>
      <s-icon name="message"></s-icon>
      <s-icon name="garbage"></s-icon>
      <s-icon name="check-circle"></s-icon>
      <s-icon name="collection"></s-icon>
      <s-icon name="thumb-up"></s-icon>
        `.replace(/(^\s)+|(\s*$)+/g, ""),
      icons: [
        "red-garbage",
        "check-circle",
        "plus",
        "delete",
        "info",
        "errormsg",
        "collection",
        "garbage",
        "message",
        "correct",
        "magnifier",
        "pen",
        "error",
        "loading",
        "up",
        "down",
        "left",
        "right",
        "setting",
        "thumb-up",
        "download",
        "git",
        "wechat",
        "heart"
      ]
    };
  },
  components: {
    "s-icon": Icon,
    "s-showcode": ShowCode
  }
};
</script>

<style lang="less" scoped>
.s-icon {
  width: 1.5em;
  height: 1.5em;
}
.s-container {
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 300px;
  padding: 14px;
  & > .s-icon {
    margin: 10px 20px;
    line-height: 1;
  }
}
.iconAndText {
  display: grid;
  grid-template-columns: repeat(6, 16.67%);
  border-radius: 6px;
  > .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ddd;
    height: 120px;
    color: #666;
    margin-right: -1px;
    margin-top: -1px;
    flex-wrap: wrap;
    flex-shrink: 1;
    &:hover > .s-icon {
      // fill: aqua;
      fill: rgb(92, 182, 255);
    }
    &:hover > .iconTitle {
       color: rgb(92, 182, 255);
    }
    &:first-of-type {
      border-top-left-radius: 6px;
    }
    &:last-of-type {
      border-bottom-right-radius: 6px;
    }
    &:nth-of-type(6) {
      border-top-right-radius: 6px;
    }
    &:nth-of-type(19) {
      border-bottom-left-radius: 6px;
    }
    > .s-icon {
      margin-bottom: 0.8em;
    }
  }
}
@media (max-width: 1024px) {
  .icon>.iconTitle {
      font-size: 12px;
  }  
}
</style>


