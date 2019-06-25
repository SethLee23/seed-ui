<template>
  <button
    class="el-button"
    :class="[`${types}`,`icon-${position}`]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <s-icon :name="icon" class="icon" v-if="icon&&!loading"></s-icon>
    <s-icon name="loading" class="icon loading" v-if="loading"></s-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import "./svg.js";
import Vue from "vue";
import Icon from "./icon";

Vue.component("s-icon", Icon);
export default {
  name: "SButton",
  props: {
    types: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    loading: {
      type: Boolean
    },
    position: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].indexOf(value) >= 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$button-danger: #f78989;
$button-normal: white;
$button-success: #67c23a;
$color: white;
$border-color: #f78989;
$font-size: 14px;
$padding-top: 0.85em;
$padding-right: 1.45em;
$padding-bottom: 0.85em;
$padding-left: 1.45em;
$padding-topandbottom: 0.85em;
$padding-leftandright: 1.45em;
$border-radius: 4px;
$circle-padding: 1em;
$border-color-hover: #666;
$background-active-opacity:rgba(0, 0, 0, 5%);
$background-hover-opacity:rgba(255, 255, 255, 15%);
$background-hover-boxshawdow:rgba(0, 0, 0, 30%);
/* base css */
.el-button {
  display: inline-block;
  line-height: 1;
  text-align: center;
  outline: none;
  background-color: $button-normal;
  border: 1px solid #dcdfe6;
  color: $color;
  padding: $padding-topandbottom $padding-leftandright;
  font-size: $font-size;
  border-radius: $border-radius;
  position: relative;
  display: flex;
  &.icon-left {
    > .icon {
      order: 1;
      margin-left: 0;
      margin-right: 0.2em;
    }
    > .content {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.2em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
button:disabled {
  border-color: #bbb;
  color: #bbb;
  cursor: not-allowed;
}
button:active::before {
  display: block;
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: $background-active-opacity
}

button:hover::after {
  display: block;
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: $background-hover-opacity;
  box-shadow: 0px 1px 2px 1px $background-hover-boxshawdow;
}

button.circle:hover::after,
button.circle:active::before {
  border-radius: 50%;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

/* diffrent type button */
button.danger {
  background-color: $button-danger;
}
button.normal {
  color: black;
  background-color: $button-normal;
  border: 1px solid #dcdfe6;
}
button.success {
  background-color: $button-success;
  border: 1px solid $button-success;
}
/* circle button */
button.circle {
  border-radius: 50%;
  padding: $circle-padding;
  &.icon-left {
    > .icon {
      order: 1;
      margin-left: 0;
      margin-right: 0;
    }
    > .content {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
.icon.loading {
  animation: spin 2s infinite linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>


