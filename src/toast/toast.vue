<template>
  <div class="toast" :class="classes" v-if="showToast">
    <!-- <slot>要替换</slot> -->
    <div ref="content" v-if="enableHTML" v-html="toastMsg"></div>
    <slot v-else></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "sToast",
  data() {
    return {
      showToast: true
    };
  },
  props: {
    toastPosition: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "center"].indexOf(value) >= 0;
      }
    },
    toastMsg: {
      type: String
    },
    autoClose: {
      type: Number | String,
      default: 1
    },
    enableHTML: {
      type: Boolean,
      default: false
    }
    //   autoClose: {
    //       type: Object,
    //       default(){
    //           return {
    //           text:'关闭',
    //           callback: undefined,
    //           }
    //       }
    //   }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.showToast = false;
      }, this.autoClose * 1000);
    }
  },
  computed: {
    classes() {
      return {
        [`position-${this.position}`]: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$min-height: 40px;
$line-height: 1.8;
$border-radius: 4px;
$background-color: rgba(0, 0, 0, 0.75);
.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  min-height: $min-height;
  line-height: $line-height;
  display: flex;
  color: #fff;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>


