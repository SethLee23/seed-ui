<template>
  <div class="popover" :class="classes" @click="onClick">
    <div class="contentWrapper" v-if="visible" ref="content">
      <slot name="content"></slot>
    </div>
    <div class="triggerWrapper" @click="toggleShow" ref="trigger">
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
    onClick() {
      console.log(1);
    },
    appendContent() {
      if (this.visible) {
        this.$nextTick(() => {
          let {width,height,top,left} = this.$refs.trigger.getBoundingClientRect()
          console.log(width, height, top, left);
          console.log(2222);
          let content = this.$refs.content;
          console.log(content);
          document.body.appendChild(content)
          this.$refs.content.style.top = top + window.scrollY + "px";
        });
      }
    },
    toggleShow() {
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
    },
    close() {
      this.visible = false;
    },
    open() {
      this.visible = true;
      this.appendContent()
    }
  },
  mounted() {
    // console.log(this.$refs)
  }
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
