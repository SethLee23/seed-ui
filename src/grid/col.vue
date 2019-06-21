<template>
  <div class="col" :class="colClasses" :style="colStyle">
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
    },
    colClasses() {
      let { span,offset,ipad,narrowPc,pc,widePc,colAlign,createClasses } = this;
      return [
        // span && "span-" + span,
        span&&`span-${span}`,
        offset && `offset-${offset}`,
        colAlign && "align-" + colAlign,
        ...createClasses('ipad',ipad)
        // ...(ipad ? [`ipad-span-${ipad.span}`,`ipad-offset-${ipad.offset}`]:[]),
        // ...(narrowPc ? [`narrowPc-span-${narrowPc.span}`,`narrowPc-offset-${narrowPc.offset}`]:[]),
        // ...(pc ? [`pc-span-${pc.span}`,`pc-offset-${pc.offset}`]:[]),
        // ...(widePc ? [`widePc-span-${widePc.span}`,`widePc-offset-${widePc.offset}`]:[]),
      ];
    }
  },
  methods: {
   createClasses(str,obj){
      if(obj){
      return[
      `${str}-span-${obj.span}`,  
      `${str}-offset-${obj.offset}`,  
      ]
    }else{
      return []
    }
   }
  },
  mounted() {
    this.$nextTick(() => {
      //   console.log(this.colAlign);
      console.log(this.ipad);
    });
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
      validator(obj) {
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
      }
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
  @for $i from 1 to 24 {
    &.offset-#{$i} {
      margin-left: $i/24 * 100%;
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
}
// $class-prefix: col-
</style>
