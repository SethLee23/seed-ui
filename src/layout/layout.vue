<template>
  <div class="sLayout" :class="{hasSider: hasSider}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SLayout",
  data() {
    return {
        hasSider: false
    };
  },
  mounted() {
      this.$children.forEach((childVm)=>{
       if(childVm.$options.name==='SLayoutSider'){
         this.hasSider = true
       }
      })
    
  }
};
</script>

<style lang="less" scoped>
.sLayout {
  flex-flow: column;
  display: flex;
  flex-grow: 1;
  &.hasSider {
  flex-flow: row;
  }
}
</style>


