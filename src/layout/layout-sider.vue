<template>
  <transition name="slide">
    <div class="SLayoutSider" v-if="show">
      <slot></slot>
      <button @click="triggerShow">trigger</button>
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

<style lang="scss" scoped>
.SLayoutSider {
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


