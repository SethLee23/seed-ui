<template>
  <div class="popover" :class="classes" @click="onClick($event)" ref="popover">
    <div class="contentWrapper" v-if="visible" ref="content" :class="`position-${position}`">
      <slot name="content"></slot>
    </div>
    <div class="triggerWrapper" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sPopover",
  data() {
    return {
      visible: false
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "left", "right", "bottom"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    classes() {
      return {};
    }
  },
  methods: {
    appendContent() {
      this.$nextTick(() => {
        let {
          width,height,top,left,right,bottom
        } = this.$refs.trigger.getBoundingClientRect();
        let {height:height2} = this.$refs.content.getBoundingClientRect();
        let content = this.$refs.content;
        if (this.$refs.content.classList.contains("position-top")) {
          this.$refs.content.style.top = top + window.scrollY + "px";
          this.$refs.content.style.left = left + "px";
        }else if(this.$refs.content.classList.contains("position-left")){
           this.$refs.content.style.top = top + window.scrollY +(height-height2)/2+ "px";
           this.$refs.content.style.left = left + "px";
        }else if(this.$refs.content.classList.contains("position-right")){
           this.$refs.content.style.top = top + window.scrollY +(height-height2)/2+ "px";
           this.$refs.content.style.left = left + width + "px";
        }else if(this.$refs.content.classList.contains("position-bottom")){
           this.$refs.content.style.top = bottom+ window.scrollY + "px";
           this.$refs.content.style.left = left + "px";
        }
      });
    },
    eventHandler(e) {
      if (e.target === this.$refs.content) {
        console.log("你点击的是content");
        return;
      }
       console.log('document关闭')
      this.close();
    },
    onClick(e) {
      if (this.$refs.trigger.contains(e.target)) {
        if (!this.visible) {
          console.log('trigger打开')
          this.open();
        } else {
          console.log('trigger关闭')
          this.close();
        }
      }
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    open() {
      this.visible = true;
      this.appendContent();
      setTimeout(() => {
        document.addEventListener("click", this.eventHandler);
      }, 0);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.popover {
  display: inline-block;
  vertical-align: top;
  // position: relative;
}
.contentWrapper {
  border: 1px solid $border-color;
  word-break: break-all;
  position: absolute;
  background: white;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  &::before {
      display: block;
      content: "";
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }
    &::after {
      display: block;
      content: "";
      border: 10px solid transparent;
      position: absolute;
    }
  &.position-top {
    left: 0px;
    transform: translateY(-100%);
    margin-top: -10px;
    border-top-color: $border-color;
    &::before {
      top: 100%;
      left: 5px;
      border-top-color: $border-color;
    }
    &::after {
      top: 100%;
      left: 5px;
      border-top-color: white;
      transform: translateY(-1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      left: 100%;
      top: 5px;
      border-left-color: $border-color;
    }
    &::after {
      top: 5px;
      left: 100%;
      border-left-color: white;
      transform: translateX(-1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      right: 100%;
      top: 5px;
      border-right-color: $border-color;
    }
    &::after {
      top: 5px;
      right: 100%;
      border-right-color: white;
      transform: translateX(1px);
    }
  }
  &.position-bottom {
    margin-top:10px; 
    &::before {
      left: 5px;
      bottom: 100%;
      border-bottom-color: $border-color;
    }
    &::after {
      left: 5px;
      bottom: 100%;
      border-bottom-color: white;
      transform: translateY(1px);
    }
  }
}
.triggerWrapper {
  position: relative;
}
</style>
