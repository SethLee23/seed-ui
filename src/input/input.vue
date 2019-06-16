<template>
  <div class="wrapper" :class="{error:error}">
    <input type="text"
    :disabled="disabled" :readonly="readonly"
    :error="error"
    v-model="inputValue"
    @change='$emit("change",$event.target.value)'
    @focus="$emit('focus',$event.target.value)"
    @input="$emit('input',$event.target.value)"
    @blur="$emit('blur',$event.target.value)"
    :placeholder="placeholder"
    ref="input">
    <template v-if="error">
    <div class="errmsg">
        <s-icon name="error"></s-icon>
        {{error}}
    </div>
    </template>
    <template v-if="clearable" >
  <div class="delete" @click="clear" ref="icon">
    <s-icon name="cha"></s-icon>
  </div>
  </template>
  <template v-if="icon" >
  <div :class="{[`position-${position}`]:true}" v-if="icon" ref="icon">
    <s-icon :name="icon"></s-icon>
  </div>
  </template>
  </div>
</template>

<script>
// 解决 position 问题，首先获取拥有icon的ref,设置其class为特别的class
import Vue from "vue";
import Icon from "../button/icon";
Vue.component('s-icon',Icon)
export default {
  name: "SInput",
  data(){
     return {
     inputValue: this.value  
     }
  },
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
      },
      position: {
          type: String,
          default: 'right',
      }
  },
  mounted(){
      if(this.$refs.icon){
        this.$refs.input.classList.add('iconRight')
      }
  },
  methods: {
      clear(){
       this.inputValue = ''
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
  position: relative;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    font-size: inherit;
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &.iconRight {
    width: calc(100% - 2em);
    padding-right: 2em;
  }
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
  .delete, 
  .position-right{
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 2.5em;
  }
}
</style>


