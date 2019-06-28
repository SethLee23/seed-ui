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
        // background: "white"
      };
    },
    colClasses() {
      let {
        span,
        offset,
        ipad,
        narrowPc,
        pc,
        widePc,
        colAlign,
        createClasses
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
        let arr = [];
        if (obj.span) {
          arr.push(`${str}-span-${obj.span}`);
        }
        if (obj.offset) {
          arr.push(`${str}-offset-${obj.offset}`);
        }
        return arr;
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

<style lang="less" scoped>
    
.col {
  @media (min-width: 0px) {
    .generate-columns(24);
    .generate-offset(24);
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
    .generate-ipad-columns(24);
    .generate-ipad-offset(24)
  }
  @media (min-width: 769px) {
    .generate-narrowPc-columns(24);
    .generate-narrowPc-offset(24)
  }
  @media (min-width: 993px) {
    .generate-pc-columns(24);
    .generate-pc-offset(24)
  }
  @media (min-width: 1201px) {
    .generate-widePc-columns(24);
    .generate-widePc-offset(24)
}
}
.generate-columns(@n, @i: 1) when (@i =< @n) {
      &.span-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-columns(@n, (@i + 1));
    }
    .generate-ipad-columns(@n, @i: 1) when (@i =< @n) {
      &.ipad-span-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-ipad-columns(@n, (@i + 1));
    }
    .generate-narrowPc-columns(@n, @i: 1) when (@i =< @n) {
      &.narrowPc-span-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-narrowPc-columns(@n, (@i + 1));
    }
    .generate-pc-columns(@n, @i: 1) when (@i =< @n) {
      &.pc-span-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-pc-columns(@n, (@i + 1));
    }
    .generate-widePc-columns(@n, @i: 1) when (@i =< @n) {
      &.widePc-span-@{i} {
        width: (@i * 100% / @n);
      }
      .generate-widePc-columns(@n, (@i + 1));
    }


    .generate-offset(@n, @i: 1) when (@i =< @n) {
      &.offset-@{i} {
        margin-left : (@i * 100% / @n);
      }
      .generate-offset(@n, (@i + 1));
    }
    .generate-ipad-offset(@n, @i: 1) when (@i =< @n) {
      &.ipad-offset-@{i} {
        margin-left : (@i * 100% / @n);
      }
      .generate-ipad-offset(@n, (@i + 1));
    }
    .generate-narrowPc-offset(@n, @i: 1) when (@i =< @n) {
      &.narrowPc-offset-@{i} {
        margin-left : (@i * 100% / @n);
      }
      .generate-narrowPc-offset(@n, (@i + 1));
    }
    .generate-pc-offset(@n, @i: 1) when (@i =< @n) {
      &.pc-offset-@{i} {
        margin-left : (@i * 100% / @n);
      }
      .generate-pc-offset(@n, (@i + 1));
    }
    .generate-widePc-offset(@n, @i: 1) when (@i =< @n) {
      &.widePc-offset-@{i} {
        margin-left : (@i * 100% / @n);
      }
      .generate-widePc-offset(@n, (@i + 1));
    }
</style>
