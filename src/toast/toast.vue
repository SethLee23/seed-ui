<template>
  <div class="toast" :class="classes">
    <!-- <slot>要替换</slot> -->
    <div class="wrapper" ref="toast">
      <div ref="content" v-if="enableHTML" v-html="toastMsg" class="123"></div>
      <div v-else>
        <div v-text="toastMsg" class="textContent"></div>
      </div>
      <div class="line" ref="line"></div>
      <div class="closeContent" @click="clickClose">{{closeButton.closeText}}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "sToast",
  data() {
    return {};
  },
  props: {
    toastPosition: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "center", "left", "right"].indexOf(value) >= 0;
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
      default: false,
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
    });
  },
  methods: {
    //   此处关闭和关闭后调用回调分开
    close() {
      this.$el.remove();
      this.$destroy();
    },
    clickClose() {
      this.close();
      if (
        this.closeButton &&
        typeof this.closeButton.callbacks === "function"
      ) {
        this.closeButton.callbacks();
      }
    }
  },
  computed: {
    classes() {
      return {
        [`position-${this.toastPosition}`]: true
      };
    }
  }
};
</script>

<style lang="less" scoped>
@font-size: 14px;
@min-height: 40px;
@line-height: 1.8;
@border-radius: 4px;
@background-color: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;

  > .wrapper {
    display: flex;
    align-items: center;
    font-size: @font-size;
    min-height: @min-height;
    line-height: @line-height;
    display: flex;
    color: #fff;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
  }
  .line {
    border-left: 1px solid rgb(143, 143, 143);
    margin: 0 1em;
    margin-right: 0;
  }
  .closeContent {
    cursor: pointer;
    // border: 1px solid red;
    padding-left: 16px;
  }
  &.position-top {
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    transition: all 0.3s;
    > .wrapper {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 0.3s;
    }
  }
  &.position-bottom {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    transition: all 0.3s;
    > .wrapper {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up linear 0.3s;
    }
  }
  &.position-left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    > .wrapper {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      animation: slide-right linear 0.3s;
    }
  }
  &.position-right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    > .wrapper {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-left linear 0.3s;
    }
  }
  &.position-center {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all 0.3s;
    animation: fadeIn linear 0.3s;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-right {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>


