<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "sCollapse",
  data() {
    return {
      eventBus: new Vue(),
      selectedArr: []
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  props: {
    selected: {
      type: Array
    },
    singel: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.selected) {
      this.eventBus.$emit("update:selected", this.selected);
    }

    this.selectedArr = JSON.parse(JSON.stringify(this.selected));
    this.eventBus.$on("update:addSelected", name => {
      if (this.singel) {
        this.selectedArr = [name];
      } else {
        this.selectedArr.push(name);
      }
      this.$emit("update:selected", this.selectedArr);
      this.eventBus.$emit("update:selected", this.selectedArr);
    });
    this.eventBus.$on("update:removeSelected", name => {
      let index = this.selectedArr.indexOf(name);
      this.selectedArr.splice(index, 1);
      this.$emit("update:selected", this.selectedArr);
      this.eventBus.$emit("update:selected", this.selectedArr);
    });
  }
};
</script>

<style lang="scss" scoped>
$grey: grey;
$border-radius: 4px;
.collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
