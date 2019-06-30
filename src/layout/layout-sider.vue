<template>
  <transition name="slide">
    <div class="SLayoutSider" v-if="show">
      <slot></slot>
      <s-button @click="triggerShow" types="success" class="buttons">trigger</s-button>
    </div>
  </transition>
</template>

<script>
import Button from '../button/button' 
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
  },
  components: {
    's-button': Button,
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
  margin-right: 0;
  transition: .5s;
}
//进入过渡和过渡结束状态
.slide-enter, .slide-leave-to {
   margin-left: -200px;
}


</style>


