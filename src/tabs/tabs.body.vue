<template>
  <div class="tabBody">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "STabsBody",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
.tabBody {
  display: flex;
}
</style>


