<template>
  <div class="sLayout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SLayout",
  data() {
    return {};
  },
  props: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.sLayout {
  flex-flow: column;
  display: flex;
}
</style>


