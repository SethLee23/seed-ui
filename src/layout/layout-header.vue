<template>
<div class="SLayoutHeader">
  <slot></slot>  
</div>
</template>

<script>
export default {
  name: 'SLayoutHeader',
  data(){
    return {
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.SLayoutHeader {
    border: 1px solid green;
    flex-grow: 0;
}
</style>


