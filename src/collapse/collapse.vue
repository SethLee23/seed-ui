<template>
  <div class="collapse">
      <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "sCollapse",
  data() {
    return {
     eventBus: new Vue(),
     selectedArr: [],
    };

  },
  provide(){
    return {
      eventBus: this.eventBus,
    }
  },
  props: {
     selected: {
       type: Array,
     } 
    },
    mounted(){
      if(this.selected){
         this.eventBus.$emit('update:selected',this.selected)
      }
     this.selectedArr = JSON.parse(JSON.stringify(this.selected));
       this.eventBus.$on('update:addSelected',(name)=>{
         console.log('add')
         this.selectedArr.push(name)
          this.$emit('update:selected',this.selectedArr)
         this.eventBus.$emit('update:selected',this.selectedArr)
       })
       this.eventBus.$on('update:removeSelected',(name)=>{
         console.log('remove')
        let index = this.selectedArr.indexOf(name)
        this.selectedArr.splice(index,1)
        console.log('this.selectedArr remove')
        this.$emit('update:selected',this.selectedArr)
        this.eventBus.$emit('update:selected',this.selectedArr)
       })
    }
  }
</script>

<style lang="scss" scoped>

</style>
