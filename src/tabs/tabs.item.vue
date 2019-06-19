<template>
  <div class="tabItem" :class="{active:active}" @click="changeItem" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "STabsItem",
  data() {
    return {
      active: false
    };
  },
  inject: ["eventBus"],
  props: {
    name: {
      type: String
    }
  },
  mounted() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        if (name === this.name) {
          this.active = true;
        } else {
          this.active = false;
        }
      });
    }
  },
  methods: {
    changeItem() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        this.eventBus.$emit("update:changeSelected", this.name, this);
        this.$emit("click", this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tabItem {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
    padding: 0 1em;
    // border: 1px solid red;
    display: flex;
    position: relative;
  align-items: center;
  &.active {
    color: blue;
  }
}
</style>


