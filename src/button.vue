<template>
  <div>
    <button class="el-button">
    <svg class="icon">
     <use xlink:href="#icon-error"></use>
    </svg>
      <slot>默认</slot>
    </button>
  </div>
</template>

<script>
import './svg.js'
export default {
  name: "Button"
};
</script>

<style>
.el-button {
  margin: 1em;
  display: inline-block;
  line-height: 1;
  text-align: center;
  outline: none;
  border: 1px solid var(--border-color);
  color: var(--color);
  background-color: var(--button-danger-background);
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


