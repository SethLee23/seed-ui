<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "STabs",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    selected: {
      type: String
    },
    direction: {
      type: String,
      default: "horizonal",
      validator(value) {
        return ["horizonal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.$emit("update:selected", this.selected);
    if (this.$children.length === 0) {
      console &&console.warn &&console.warn("g-tabs应当有子组件，g-tabs-head 和 g-tabs-body");
    }
    this.eventBus.$on("update:changeSelected", (name,vm) => {
      this.eventBus.$emit("update:selected", name,vm);
      this.$emit("update:selected", name,vm);
    });
  }
};
</script>

<style lang="less" scoped>
</style>


