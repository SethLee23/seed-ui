<template>
<div class="SLayoutFooter">
    <slot><slot>
</div>
</template>

<script>
export default {
  name: 'SLayoutFooter',
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
.SLayoutFooter {
    border: 1px solid pink;
    flex-grow: 0;
}
</style>


