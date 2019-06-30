<template>
  <div>
     <s-popover style="display: flex;justify-content: center;" position="bottom">
            <template v-slot:content>
                我是浮层
            </template>
            <template>
                <s-button>点击开启浮层</s-button>
            </template>
        </s-popover>
        <s-popover style="display: flex;justify-content: center; margin:60px;" position="right">
            <template v-slot:content='{close}'>
                我是浮层<s-button @click="close">关闭</s-button>
            </template>
            <template v-slot:default="slotProps">
                <s-button>点击开启浮层</s-button>
            </template>
        </s-popover>  
        <s-popover style="display: flex;justify-content: center; margin:50px;" position="left">
            <template v-slot:content>
                我是浮层
            </template>
            <template>
                <s-button>点击开启浮层</s-button>
            </template>
        </s-popover>
        <s-popover style="display: flex;justify-content: center; margin:60px;" position="top">
            <template v-slot:content>
                我是浮层
            </template>
            <template>
                <s-button>点击开启浮层</s-button>
            </template>
        </s-popover>
        <s-popover style="display: flex;justify-content: center;" position="bottom"
        trigger="hover">
            <template v-slot:content>
                我是浮层
            </template>
            <template>
                <s-button>hover开启浮层</s-button>
            </template>
        </s-popover>
        <s-popover style="display: flex;justify-content: center; margin:60px;" position="right"
        trigger="hover">
            <template v-slot:content='{close}'>
                我是浮层<s-button @click="close">关闭</s-button>
            </template>
            <template v-slot:default="slotProps">
                <s-button>hover开启浮层</s-button>
            </template>
        </s-popover>  
        <s-popover style="display: flex;justify-content: center; margin:50px;" position="left"
        trigger="hover">
            <template v-slot:content>
                我是浮层
            </template>
            <template>
                <s-button>hover开启浮层</s-button>
            </template>
        </s-popover>
        <s-popover style="display: flex;justify-content: center; margin:60px;" position="top"
        trigger="hover">
            <template v-slot:content>
                我是浮层
            </template>
            <template>
                <s-button>hover开启浮层</s-button>
            </template>
        </s-popover>
  </div>
</template>

<script>
import Popover from "../../../src/popover/popover";
import Button from '../../../src/button/button' 
export default {
  name: 'popover-demos',
  data() {
    return {
    
    };
  },
  components: {
    "s-popover": Popover,
    "s-button": Button
  }
};
</script>

<style lang="less">
</style>

