<template>
  <div class="row" :class="rowStyle">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {

  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
}
.row {
 margin-left: -15px;
 margin-right: -15px;
}
</style>
