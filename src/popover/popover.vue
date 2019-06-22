<template>
  <div class="popover" :class="classes" @click="onClick($event)">
    <div class="contentWrapper" v-if="visible" ref="content">
      <slot name="content"></slot>
    </div>
    <div class="triggerWrapper" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "sPopover",
  data() {
    return {
      visible: false
    };
  },
  props: {},
  computed: {
    classes() {
      return {};
    }
  },
  methods: {
    onClick(e) {
      console.log(e.target)
      if(this.visible){
      if(e.target === this.$refs.content){
        return
      }
      }
      this.visible = !this.visible
      // if(e.target===)
      // this.visible = !this.visible
      // if(this.visible ==true){
      //   console.log('if visible')
      //   console.log(this.visible)
      //   console.log(this.$refs.content)
      //    // 浮层开启后监听事件
      //    this.appendContent()
      //   let eventHandler = (e)=>{
      //     this.visible = false
      //     document.removeEventListener('click',eventHandler)
      //   }
      //   setTimeout(()=>{
      //    document.addEventListener('click',eventHandler)
      //   },1)
        
      // }else{
       
      // }
//       console.log(e.target)
// if(!this.visible){
//        this.open()
        //  let eventHandler = (e)=>{
        //    this.close()
        //   document.removeEventListener('click',eventHandler)
        // }
        // this.$nextTick(()=>{
        //  document.addEventListener('click',eventHandler)
        // })
      // }
      // if(this.visible){
      // this.close()
      // console.log(this.visible)
      // }

    },
    appendContent() {
      console.log('进来')
        this.$nextTick(() => {
          let {width,height,top,left} = this.$refs.trigger.getBoundingClientRect()
          let content = this.$refs.content;
          document.body.appendChild(content);
          this.$refs.content.style.top = top + window.scrollY + "px";
        });
    },
    toggleShow() {
      if (this.visible) {
        console.log('close')
        this.close();
      } else {
        console.log('open')
        this.open();
      }
    },
    close() {
      this.visible = false;
    },
    open() {
      this.visible = true;
      this.appendContent();
    }
  },
  mounted() {
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
  word-break: break-all;
  position: absolute;
  transform: translateY(-100%);
  left: 0px;
  background: white;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  margin-top: -10px;
  &::before {
    display: block;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
    top: 100%;
    left: 5px;
  }
  &::after {
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
