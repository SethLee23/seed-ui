<template>
  <div>
    <div class="code-collapse" @click="showCode" v-if="!show">显示代码</div>
    <transition name="slide">
      <div v-if="show" class="code-collapseItem">
        <div>
          <s-prism>{{code}}</s-prism>
        </div>
      </div>
    </transition>
    <div class="code-collapse" @click="hide" v-if="show">隐藏代码</div>
  </div>
</template>

<script>
import "prismjs";
// import "prismjs/themes/prism-funky.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";
export default {
  name: "showCode",
  data() {
    return {
      show: false
    };
  },
  components: {
    "s-prism": Prism
  },
  methods: {
    showCode() {
      this.show = true;
    },
    hide() {
      this.show = false;
    }
  },
  props: {
    code: String
  }
};
</script>

<style lang="less" scoped>
@grey: #ddd;
.code-collapse {
  border: 1px solid @grey;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  color: @grey;
  margin: 5px 0;
  &:hover {
    color: rgb(64, 158, 255);
  }
}
.code-collapseItem {
  > div {
    background: @grey;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s;
}
// 消失的（最后）状态
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

