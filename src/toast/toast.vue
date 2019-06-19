<template>
  <div class="toast" :class="classes" v-if="showToast">
    <!-- <slot>要替换</slot> -->
    <div class="wrapper" ref="toast">
      <div ref="content" v-if="enableHTML" v-html="toastMsg"></div>
      <div v-else>
        <slot></slot>
      </div>
      <div class="line" ref="line"></div>
      <div class="closeContent" @click="close">{{closeButton.closeText}}</div>
    </div>
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
    },
    closeButton: {
      type: Object,
      default() {
        return {
          closeText: "关闭",
          callbacks: undefined
        };
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoClose * 10000);
    }
    this.$nextTick(() => {
      let { height, top } = this.$refs.toast.getBoundingClientRect();
      this.$refs.line.style.height = height + "px";
      let { left } = this.$refs.line.getBoundingClientRect();
    });
  },
  methods: {
    close() {
      this.showToast = false
      console.log(this.closeButton.callbacks)
      this.closeButton.callbacks();
      if (this.closeButton && this.callback) {
      }
      //   this.$emit('click')
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
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  > .wrapper {
    display: flex;
    align-items: center;
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
  .line {
    border-left: 1px solid red;
    margin: 0 1em;
  }
  .closeContent {
      cursor: pointer;
  }
}
</style>


