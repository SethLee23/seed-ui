<template>
<div v-if="active">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'STabsPane',
  inject: ['eventBus'],
  data(){
    return {
      active: false,
    }
  },
  props: {
   name: {
     type: String,
   }
  },
  mounted() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true
      }else{
        this.active = false
      }
    });
  },
};
</script>

<style lang="less" scoped>
</style>


