<template>
    <div class="toast" :class="classes">
        <slot>要替换</slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'sToast',
    props:{
        position: String,
        default: 'top',
        validator(value) {
        return ["top", "bottom",'center'].indexOf(value) >= 0;
      }
    },
    computed:{
       classes(){
            return {
               [`position-${position}`]:true 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.toast {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    padding: 0.5em;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>


