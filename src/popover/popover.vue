<template>
  <div class="popover" :class="classes" ref="popover">
    <div class="contentWrapper" v-if="visible" ref="content" :class="`position-${position}`">
      <slot name="content" :close="close"></slot>
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
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value){
        return ['click','hover'].indexOf(value) >= 0
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
      this.$nextTick(() =>{
        let {
          width,height,top,left,right,bottom
        } = this.$refs.trigger.getBoundingClientRect();
        let content = this.$refs.content;
        let {height:height2} = content.getBoundingClientRect();
         let positions = {
        top: {
          top: window.scrollY + top,
          left: left,
        },
        bottom: {
          top: window.scrollY + top + height,
          left: left,
        },
        left: {
          top: window.scrollY + top + (height-height2)/2,
          left: left,
        },
        right: {
          top: window.scrollY + top + (height-height2)/2,
          left: left + width,
        }
      }
      content.style.left = positions[this.position].left + 'px'
      content.style.top = positions[this.position].top + 'px'
      });
    },
    eventHandler(e) {
      if (e.target === this.$refs.content||this.$refs.content.contains(e.target)) {
        console.log("你点击的是content");
        return;
      }
       console.log('document关闭')
      this.close();
    },
    onClick(e) {
      // console.log(this.$refs.content)
      if (this.$refs.trigger.contains(e.target)) {
        if (!this.visible) {
          this.open();
        } else {
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
  mounted() {
   if(this.trigger==='click'){
     this.$refs.popover.addEventListener('click',this.onClick)
   }else if(this.trigger==="hover"){
     this.$refs.trigger.addEventListener('mouseenter',this.open)
     this.$refs.popover.addEventListener('mouseleave',this.close)
   }
  }
};
</script>

<style lang="less" scoped>
@border-color: #333;
@border-radius: 4px;

.popover {
  display: inline-block;
  vertical-align: top;
  // position: relative;
}
.contentWrapper {
  border: 1px solid @border-color;
  word-break: break-all;
  position: absolute;
  background: white;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  z-index: 666;
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
    border-top-color: @border-color;
    &::before {
      top: 100%;
      left: 5px;
      border-top-color: @border-color;
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
      border-left-color: @border-color;
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
      border-right-color: @border-color;
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
      border-bottom-color: @border-color;
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
