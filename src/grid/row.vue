<template>
  <div class="row" :style="rowStyle">
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
    },
    align: {

    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    }
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
}
.row {

}
</style>
