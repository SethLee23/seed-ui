<template>
  <svg class="s-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: 'SIcon',
  props: ["name"]
};
</script>

<style lang="less" scoped>
.s-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


