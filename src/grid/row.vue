<template>
  <div class="row" >
    <div class="wrapper" :style="rowStyle">
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
    aligns: {
     type: String,
     default: 'left',
     validator(value){
       return ['left','center','right'].indexOf(value) >= 0  
     }
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
      vm.colAlign = this.aligns
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.row {
    overflow: hidden;
}
</style>
