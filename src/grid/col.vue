<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = obj => {
  let valid = false;
  let arr = Object.keys(obj);
  //   for in 循环
  // let arr = [];
  // for (let key in obj) {
  //   if (obj[key]) {
  //     arr.push(key)
  //   }
  // }
  arr.forEach(item => {
    if (["span", "offset"].includes(item)) {
      valid = true;
    }
  });
  return valid;
};
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
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px",
        background: "pink"
      };
    },
    colClasses() {
      let {
        span,offset,ipad,narrowPc,pc,widePc,colAlign,createClasses
      } = this;
      return [
        // span && "span-" + span,
        span && `span-${span}`,
        offset && `offset-${offset}`,
        colAlign && "align-" + colAlign,
        ...createClasses("ipad", ipad),
        ...createClasses("narrowPc", narrowPc),
        ...createClasses("pc", pc),
        ...createClasses("widePc", widePc)
      ];
    }
  },
  methods: {
    createClasses(str, obj) {
      if (obj) {
        let arr = []
        if(obj.span){
          arr.push(`${str}-span-${obj.span}`)
        }
        if(obj.offset){
          arr.push(`${str}-offset-${obj.offset}`)
        }
        return arr
        // return [`${str}-span-${obj.span}`, 
        // `${str}-offset-${obj.offset}`];
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.$nextTick(() => {});
  },
  props: {
    span: {
      type: String | Number
    },
    offset: {
      type: String | Number,
      default: 0
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  //   border: 1px solid blue;
    @media (min-width: 0px) {
    @for $i from 1 through 24 {
    &.span-#{$i} {
      width: ($i / 24) * 100%;
    }
  }
  @for $i from 1 through 24 {
    &.offset-#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
    }
  & > div {
    display: flex;
    border: 1px solid red;
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
  @media (min-width: 577px) {
    @for $i from 1 through 24 {
      &.ipad-span-#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.ipad-offset-#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    @for $i from 1 through 24 {
      &.narrowPc-span-#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.narrowPc-offset-#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    @for $i from 1 through 24 {
      &.pc-span-#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.pc-offset-#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    @for $i from 1 through 24 {
      &.widePc-span-#{$i} {
        width: ($i / 24) * 100%;
      }
    }
    @for $i from 1 through 24 {
      &.widePc-offset-#{$i} {
        margin-left: ($i / 24) * 100%;
      }
    }
  }
}
// $class-prefix: col-
</style>
