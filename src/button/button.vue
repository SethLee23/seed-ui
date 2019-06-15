<template>
  <div>
    <button class="el-button" :class="[`${types}`,`icon-${position}`]" :disabled="disabled" @click="$emit('click')">
      <s-icon :name="icon" class="icon" v-if="icon"></s-icon>
      <s-icon name="loading" class="icon loading" v-if="loading"></s-icon>
      <span class="content">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
import "./svg.js";
import Vue from "vue";
import Icon from "./icon";

Vue.component("s-icon", Icon);
export default {
  name: "Button",
  props: {
    types: {
      type: String,
      default: "normal"
    },
    disabled: {
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
/* base css */
.el-button {
  margin: 1em;
  display: inline-block;
  line-height: 1;
  text-align: center;
  outline: none;
  background-color: var(--button-normal);
  border: 1px solid #dcdfe6;
  color: var(--color);
  padding: var(--padding-topandbottom) var(--padding-leftandright);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
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

button:active::before {
  display: block;
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 5%);
}

button:hover::after {
  display: block;
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 15%);
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
  background-color: var(--button-danger);
}
button.normal {
  color: black;
  background-color: var(--button-normal);
  border: 1px solid #dcdfe6;
}
button.success {
  background-color: var(--button-success);
  border: 1px solid var(--button-success);
}
/* circle button */
button.circle {
  border-radius: 50%;
  padding: var(--circle-padding);
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


