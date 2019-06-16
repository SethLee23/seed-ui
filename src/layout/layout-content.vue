<template>
<div class="SLayoutContent">
  <slot><slot>  
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
 flex: 1;
  border: 1px solid gold;
}
</style>


