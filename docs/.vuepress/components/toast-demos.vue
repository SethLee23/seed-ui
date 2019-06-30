<template>
  <div>
    <h4>基础用法</h4>
    <div style="display: flex;" class="toast">
      <s-button @click="testTop">上</s-button>
      <s-button @click="testBottom">下</s-button>
      <s-button @click="testLeft">左</s-button>
      <s-button @click="testRight">右</s-button>
      <s-button @click="testCenter">中</s-button>
    </div>
    <s-showcode :code.sync="code1"></s-showcode>
  </div>
</template>

<script>
import Vue from "vue";
import plugin from "../../../src/toast/plugin";
import Button from "../../../src/button/button";
Vue.use(plugin);
import ShowCode from "../../../src/showCode";

export default {
  name: "toast-demos",
  data() {
    return {
      code1: `
      <s-button @click="testTop">上</s-button>
      <s-button @click="testBottom">下</s-button>
      <s-button @click="testLeft">左</s-button>
      <s-button @click="testRight">右</s-button>
      <s-button @click="testCenter">中</s-button>
      `.replace(/(^\s)+|(\s*$)+/g, ""),
    };
  },
  components: {
    "s-button": Button,
    "s-showcode": ShowCode
  },
  methods: {
    testTop() {
      this.$toast({
        toastMsg: "<strong>我是toast</strong>",
        autoClose: 10,
        enableHTML: true,
        toastPosition: "top",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testLeft() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 10,
        enableHTML: true,
        toastPosition: "left",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testRight() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 10,
        enableHTML: false,
        toastPosition: "right",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testBottom() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 1,
        enableHTML: false,
        toastPosition: "bottom",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    },
    testCenter() {
      this.$toast({
        toastMsg: "我是toast",
        autoClose: 1,
        enableHTML: false,
        toastPosition: "center",
        closeButton: {
          closeText: "bye",
          callbacks: () => {
            console.log("我是回调，我被调用了");
          }
        }
      });
    }
  }
};
</script>

<style lang="less">
.toast>button {
  margin: 0 10px;
}
</style>

