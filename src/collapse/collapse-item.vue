<template>
  <div class="collapseItem">
    <div class="title" @click="changeItem">{{title}}</div>
    <div class="content" v-if="show">
      <slot></slot>
    </div>
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
   this.eventBus.$on('update:selected',(names)=>{
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
         this.eventBus.$emit('update:removeSelected',this.name)
        //  this.show = false
         }else if(!this.show){
            //   this.show = true
         this.eventBus.$emit('update:addSelected',this.name)
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.collapseItem {
  display: flex;
  flex-direction: column;
  >.title {
      background:#ffab91;
  }
  >.content {
      background:  #4fc3f7;
  }
}
</style>
