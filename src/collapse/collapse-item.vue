<template>
  <div class="collapseItem">
    <div class="title" @click="changeItem" :data-title="title">{{title}}</div>
    <transition name="slide">
    <div class="content" v-if="show" :data-name="name">
      <slot></slot>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "sCollapseItem",
  data() {
    return {
        show: false,
    };
  },
  inject:['eventBus'],
  props: {
    name:{
      type: String,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
    
  },
  mounted(){
   this.eventBus&&this.eventBus.$on('update:selected',(names)=>{
    if(names.indexOf(this.name)>=0){
       this.show = true
    }else{
       this.show = false
    }
   })
  },
  methods:{
      changeItem(){
          if(this.show){
         this.eventBus&&this.eventBus.$emit('update:removeSelected',this.name)
        //  this.show = false
         }else if(!this.show){
            //   this.show = true
         this.eventBus&&this.eventBus.$emit('update:addSelected',this.name)
          }
      }
  }
};
</script>

<style lang="scss" scoped>
 $grey: #ddd;
  $border-radius: 4px;
  .collapseItem {
    > .title { 
      border: 1px solid $grey; 
      margin-top: -1px; 
      margin-left: -1px; 
      margin-right: -1px;
      min-height: 32px; 
      display: flex; 
      align-items: center; 
      padding: 0 8px;
      background: lighten($grey, 8%);
    }
    &:first-child {
      > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
    }
    &:last-child {
      > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    }
    > .content { padding: 8px; }
  } $grey: #ddd;
  $border-radius: 4px;
  .collapseItem {
    > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
      min-height: 32px; display: flex; align-items: center; padding: 0 8px;
      background: lighten($grey, 8%);
    }
    &:first-child {
      > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
    }
    &:last-child {
      > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    }
    > .content { padding: 8px; }
  }
  .slide-enter-active, .slide-leave-active {
    // transform: translateY(0);
    transition: 0.3s linear;
    opacity: 1;
}
// 消失的（最后）状态
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
   transform: translateY(-100%);
   opacity: 0;
}
</style>
