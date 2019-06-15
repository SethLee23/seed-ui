<template>
  <svg class="s-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  props: ["name"]
};
</script>

<style lang="scss" scoped>

</style>


