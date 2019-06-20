<template>
  <div class="col" :class="[`span-${span}`,`align-${colAlign}`]" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sCol",
  data() {
    return {
      gutter: 0,
      colAlign: ""
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
      //   console.log(this.gutter);
      //   console.log(this.$children)
      console.log(this.colAlign);
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
  & > div {
    display: flex;
  }
  &.align-center > div {
    justify-content: center;
  }
  &.align-left > div {
    justify-content: flex-start;
  }
  &.align-right > div {
    justify-content: flex-end;
  }
}
// $class-prefix: col-
</style>
