<template>
<div class="SLayoutContent">
  <slot></slot>  
</div>
</template>

<script>
export default {
  name: 'SLayoutContent',
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
.SLayoutContent {
 flex-grow: 1;
}
</style>


