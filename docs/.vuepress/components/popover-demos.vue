<template>
  <div>
    <h4>1. 点击开启浮层</h4>
    <div class="click">
      <s-popover>
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>
    </div>
    <s-showcode :code.sync="code1"></s-showcode>

    <h4>2. 悬浮出现浮层</h4>
    <div class="hover">
      <s-popover trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
    </div>
    <s-showcode :code.sync="code2"></s-showcode>

    <h4>3. 各方向出现浮层</h4>
    <div class="click">
      <s-popover position="top">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>
      <s-popover position="bottom">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>
      <s-popover position="left">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>
      <s-popover position="right">
        <template v-slot:content>我是浮层</template>
        <template v-slot:default="slotProps">
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>
    </div>

    <div class="hover">
      <s-popover position="top" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
      <s-popover position="bottom" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
      <s-popover position="left" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
      <s-popover position="right" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template v-slot:default="slotProps">
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
    </div>
    <s-showcode :code.sync="code3"></s-showcode>

    <h4>4. 点击浮层内按钮关闭浮层</h4>
    <s-popover position="right" trigger="hover">
      <template v-slot:content="{close}">
        我是浮层
        <s-button @click="close" style="padding:0.5em 1em; margin-left:0.5em;">关闭</s-button>
      </template>
      <template v-slot:default="slotProps">
        <s-button>hover开启浮层</s-button>
      </template>
    </s-popover>
    <s-popover position="right">
      <template v-slot:content="{close}">
        我是浮层
        <s-button @click="close" style="padding:0.5em 1em; margin-left:0.5em;">关闭</s-button>
      </template>
      <template v-slot:default="slotProps">
        <s-button>点击开启浮层</s-button>
      </template>
    </s-popover>
    <s-showcode :code.sync="code4"></s-showcode>
  </div>
</template>

<script>
import Popover from "../../../src/popover/popover";
import Button from "../../../src/button/button";
import ShowCode from "../../../src/showCode";

export default {
  name: "popover-demos",
  data() {
    return {
      code1: `
      <s-popover>
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>
        `.replace(/(^\s)+|(\s*$)+/g, ""),
      code2: `
      <s-popover trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
        `.replace(/(^\s)+|(\s*$)+/g, ""),
      code3: `
      <s-popover position="top">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>

      <s-popover position="bottom">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>

      <s-popover position="left">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>

      <s-popover position="right">
        <template v-slot:content>
          我是浮层
        </template>
        <template v-slot:default="slotProps">
          <s-button>点击开启浮层</s-button>
        </template>
      </s-popover>


      <s-popover position="top" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>

      <s-popover position="bottom" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>

      <s-popover position="left" trigger="hover">
        <template v-slot:content>我是浮层</template>
        <template>
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
      
      <s-popover position="right" trigger="hover">
        <template v-slot:content>
          我是浮层
        </template>
        <template v-slot:default="slotProps">
          <s-button>hover开启浮层</s-button>
        </template>
      </s-popover>
       `.replace(/(^\s)+|(\s*$)+/g, ""),
      code4: `
    <s-popover position="right" trigger="hover">
      <template v-slot:content="{close}">
        我是浮层
        <s-button @click="close" style="padding:0.5em 1em; margin-left:0.5em;">关闭</s-button>
      </template>
      <template v-slot:default="slotProps">
        <s-button>hover开启浮层</s-button>
      </template>
    </s-popover>

    <s-popover position="right">
      <template v-slot:content="{close}">
        我是浮层
        <s-button @click="close" style="padding:0.5em 1em; margin-left:0.5em;">关闭</s-button>
      </template>
      <template v-slot:default="slotProps">
        <s-button>点击开启浮层</s-button>
      </template>
    </s-popover>
        `.replace(/(^\s)+|(\s*$)+/g, "")
    };
  },
  components: {
    "s-popover": Popover,
    "s-button": Button,
    "s-showcode": ShowCode
  }
};
</script>

<style lang="less">
.hover {
  margin-top: 20px;
}
</style>

