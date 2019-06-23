<template>
  <div class="popover" :class="classes" @click="onClick($event)" ref="popover">
    <div class="contentWrapper" v-if="visible" ref="content">
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
  props: {},
  computed: {
    classes() {
      return {};
    }
  },
  methods: {
    eventHandler(e){
            if (e.target === this.$refs.content) {
              console.log("你点击的是content");
              return;
            }
            this.close()
    },
    onClick(e) {
       if (this.$refs.trigger.contains(e.target)) {
        if (!this.visible) {
          this.open();
        } else {
          this.close();
        }
       }
    },
    appendContent() {
      console.log("进来");
      this.$nextTick(() => {
        let {
          width,height,top,left
        } = this.$refs.trigger.getBoundingClientRect();
        let content = this.$refs.content;
        document.body.appendChild(content);
        this.$refs.content.style.top = top + window.scrollY + "px";
      });
    },
    close() {
      console.log('关闭')
      this.visible = false;
      console.log("移除监听器");
      document.removeEventListener('click',this.eventHandler)
    },
    open() {
      this.visible = true;
      this.appendContent();
      setTimeout(() => {
            console.log("添加监听器");
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
  word-break: break-all;
  position: absolute;
  transform: translateY(-100%);
  left: 0px;
  background: white;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  margin-top: -10px;
  &::before {
    display: block;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
    top: 100%;
    left: 5px;
  }
  &::after {
    display: block;
    content: "";
    border: 10px solid transparent;
    border-top-color: white;
    position: absolute;
    top: 100%;
    left: 5px;
    transform: translateY(-1px);
  }
}
.triggerWrapper {
  position: relative;
}
</style>
