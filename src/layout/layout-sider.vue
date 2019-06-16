<template>
<div class="SLayoutSider">
      <slot></slot> 
</div>
</template>

<script>
export default {
  name: 'SLayoutSider',
  data(){
    return {
    }
  },
  props: {
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.SLayoutSider {
    border: 1px solid blue;
}
</style>


