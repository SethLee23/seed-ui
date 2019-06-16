<template>
  <div class="tabHead">
    <div class="line" ref="line"></div>
    <slot></slot>
  </div>
</template>

<script>
// 注意：此组件属性获得的left包括margin
export default {
  name: "STabsHead",
  inject: ["eventBus"],
  mounted() {
     let {left:marginL} =  this.$children[0].$el.getBoundingClientRect()
    this.eventBus.$on("update:selected", name => {
      this.$children.forEach(childVm => {
        if (childVm.name === name) {
          let {right,left,top,height,width
          } = childVm.$el.getBoundingClientRect();
          this.$refs.line.style.width = `${width}px`;
          this.$refs.line.style.left = `${left-marginL}px`;
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
body,
* {
  margin: 0;
  padding: 0;
}
$border-color: rgb(234, 236, 239);
.tabHead {
  display: flex;
  border-bottom: 1px solid $border-color;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  > .line {
    border-bottom: 1px solid blue;
    position: absolute;
    top: 100%;
  }
}
</style>


