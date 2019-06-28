<template>
  <div class="group">
    <slot></slot>
  </div>
</template>

<script>
import "./svg.js";
export default {
  name: "SButtonGroup"
};
</script>

<style lang="less" scoped>
@button-danger: #f78989;
@button-normal: white;
@button-success: #67c23a;
@color: white;
@border-color: #f78989;
@font-size: 14px;
@padding-top: 0.85em;
@padding-right: 1.45em;
@padding-bottom: 0.85em;
@padding-left: 1.45em;
@padding-topandbottom: 0.85em;
@padding-leftandright: 1.45em;
@border-radius: 4px;
@circle-padding: 1em;
@border-color-hover: #666;
.group {
  display: inline-flex;
  > button {
    border-radius: 0;
  }
  > button:first-of-type {
    border-top-left-radius: @border-radius;
    border-bottom-left-radius: @border-radius;
  }
  > button:last-of-type {
    border-top-right-radius: @border-radius;
    border-bottom-right-radius: @border-radius;
  }
  > button:not(:first-child) {
    margin-left: -1px;
  }
  > button:hover {
    z-index: 1;
  }
}
</style>


