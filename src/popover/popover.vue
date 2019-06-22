<template>
  <div class="popover" :class="classes" @click="onClick">
    <div class="contentWrapper" v-if="showPopover" ref="content">
      <slot name="content" ></slot>
    </div>
    <div class="triggerWrapper" @click="toggleShow"  ref="trigger">
      <slot name="trigger"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sPopover",
  data() {
    return {
      showPopover: true,
    };
  },
  props: {},
  computed: {
    classes() {
      return {};
    }
  },
  methods: {
    onClick() {
      console.log(1);
    },
    toggleShow(){
     this.showPopover = !this.showPopover
    }
  },
  mounted() {
    // this.$nextTick(()=>{
      if(this.showPopover){
        document.body.appendChild(this.$refs.content)
      console.log(this.$refs)
      let {width,height,top,left} = this.$refs.trigger.getBoundingClientRect()
      this.$refs.content.style.top = top+window.scrollY+'px'
      }
    // })
  }
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.popover {
  display: inline-block;
  vertical-align: top;
  // position: relative;
}
.contentWrapper {
  // bottom:100%;
  word-break: break-all;
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background: white;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  // &::before{
  //   display: block;
  //   content: "";
  //   border: 10px solid transparent;
  //   position: absolute;
  //   top: 100%;
  //   left: 5px;
  // }
  &::after{
    display: block;
    content: "";
    border: 10px solid transparent;
    border-top-color: white;
    position: absolute;
    top: 100%;
    left: 5px;
    transform: translateY(-1px);
  }
  
}
.triggerWrapper {
  position: relative;
}
</style>
