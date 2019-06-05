<template>
  <div>
    <button class="el-button" :class="`${type}`" :disabled="disabled">
      <svg class="icon">
        <use xlink:href="#icon-error"></use>
      </svg>
      <slot></slot>
    </button>
  </div>
</template>

<script>
import "./svg.js";
export default {
  name: "Button",
  props: {
    type:{
    type: String,
    default: 'normal',
    },
    disabled: {
    type: Boolean,
    default: false,
    }
  }
};
</script>

<style>
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

button.circle:hover::after, button.circle:active::before {
  border-radius:50%;
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
</style>


