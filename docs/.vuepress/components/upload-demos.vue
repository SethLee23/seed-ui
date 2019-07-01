<template>
  <div>
    <h4>照片墙</h4>
    <s-upload uploadurl="https://easy-mock.com/mock/5d08939197ae0a474a534950/file/addfile"></s-upload>
    <s-showcode :code.sync="code1"></s-showcode>
  </div>
</template>

<script>
import Upload from "../../../src/picture-bed/upload";
import ShowCode from "../../../src/showCode";

export default {
  name: "upload-demos",
  data() {
    return {
      code1: `
    <h4>照片墙</h4>
    <s-upload uploadurl="https://easy-mock.com/mock/5d08939197ae0a474a534950/file/addfile"></s-upload>
    `.replace(/(^\s)+|(\s*$)+/g, "")
    };
  },
  components: {
    "s-upload": Upload,
    "s-showcode": ShowCode
  },
};
</script>

<style lang="less">
</style>

