<template>
  <div class="wrapper" :class="{error:error}">
    <input type="text" placeholder="hello 我是组件" 
    :disabled="disabled" :readonly="readonly"
    :value="value"
    @change='$emit("change",$event.target.value)'
    @focus="$emit('focus',$event.target.value)"
    @input="$emit('input',$event.target.value)"
    @blur="$emit('blur',$event.target.value)"
    >
    <div class="errmsg" v-if="error">
        <s-icon name="error"></s-icon>
        {{error}}
    </div>
    <s-icon name="setting" v-if="icon"></s-icon>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "SInput",
  props: {
      icon:{
          type: String,
      },
      value: {
          type: String,
      },
      placeholder: {
           type: String,
      },
      clearable: {
          type: Boolean,
          default: false,
      },
      disabled: {
          type: Boolean,
          default: false,
      },
      readonly: {
          type: Boolean,
          default: false,
      },
      error: {
          type: String,
      }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #999;
$height: 32px;
$border-color-hover: #666;
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 20%);
$red: #f1453d;
.wrapper {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    font-size: inherit;
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border: 1px solid $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px 0px $box-shadow-color;
    }
    &:disabled,
    &:read-only {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
      background: rgb(245, 247, 250);
    }
  }
  &.error {
    > input {
      border-color: $red;
      color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errmsg {
    color: $red;
  }
}
</style>


