<template>
  <div>
    <s-upload uploadurl="https://easy-mock.com/mock/5d08939197ae0a474a534950/file/addfile"></s-upload>
  </div>
</template>

<script>

import Upload from "../../../src/picture-bed/upload";

export default {
  name: 'upload-demos',
  data() {
    return {
    
    };
  },
  components: {
      's-upload': Upload,
  },
  mounted(){

  }
};
</script>

<style lang="less">
</style>

