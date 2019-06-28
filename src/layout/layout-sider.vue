<template>
  <transition name="slide">
    <div class="SLayoutSider" v-if="show">
      <slot></slot>
      <s-button @click="triggerShow" types="success" class="buttons">trigger</s-button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SLayoutSider",
  data() {
    return {
      show: true
    };
  },
  props: {},
  mounted() {},
  methods: {
    triggerShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="less" scoped>
.SLayoutSider {
  position: relative;
  .buttons {
  padding: 0.5em;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(-20%) translateY(-20%);
}
}
// 过渡生效状态
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}
//进入过渡和过渡结束状态
.slide-enter, .slide-leave-to {
  margin-right: -200px;
}


</style>


