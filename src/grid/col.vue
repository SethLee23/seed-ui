<template>
  <div class="col" :class="`span-${span}`" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sCol",
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      return {
        //   paddingLeft: this.gutter/2 +'px',
        //   paddingRight: this.gutter/2 +'px',
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
        background: "pink"
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.gutter);
    });
  },
  props: {
    span: {
      type: String | Number
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
//   border: 1px solid blue;
  @for $i from 1 to 24 {
    &.span-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
// $class-prefix: col-
</style>
