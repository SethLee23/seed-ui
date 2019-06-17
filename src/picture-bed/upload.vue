<template>
  <div>
    <input id="fileload" type="file" @change="preview($event);" multiple name="upload">
    <input type="button" value="取消" @click="call();">
    <h2>预览</h2>
    <div v-for="url in backgroundUrl"  class="xxx">
      <!--放置背景圖片，防止圖片變形-->
      <div style="width: 100px;height: 100px;border: 1px solid #ddd;"
      :style="{background:`url(${url}) no-repeat  center/cover`}" ></div>
    </div>
    <!-- <slot></slot>
    <s-button>预览</s-button>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundUrl: []
    };
  },
  methods: {
    preview(e) {
      //获取文件框的第一个文件,因为文件有可能上传多个文件,咱这里是一个文件
      var file = e.target.files;
      console.log(file);
      let uploadList;
      for (let i = 0; i < file.length; i++) {
        //   為啥空的？？？
        // let arr = [];
        // arr[i] = file[i];
        // console.log(arr);
        //可以进行一下文件类型的判断
        var fileType = file[i].type.split("/")[0];
        if (fileType != "image") {
          alert("请上传图片");
          return;
        }
        var fileSize = Math.round(file[i].size / 1024 / 1024);
        if (fileSize >= 3) {
          alert("请上传小于少于3M的图片");
          return;
        }
        uploadList = [];
        //   event.target.value = null
        //   //获取img对象,建一条文件流来读取图片,根据url将文件添加的流中
        let img = document.getElementById("image");
        let reader = new FileReader();
        reader.readAsDataURL(file[i]);
        //实现onload接口
        reader.onload = (e)=> {
          //获取文件在流中url
          let url = e.target.result;
          this.backgroundUrl.push(url)
          //将url赋值给img的src属性
        //   img.src = url;
        };
      }
      this.$nextTick(()=>{
          console.log('fuck')
          console.log( this.backgroundUrl)
      })
    },
    
    call() {
        this.backgroundUrl.pop()
      //将img的src属性赋值为空串
    //   document.getElementById("image").src = "";
    //   //选择文件框的value属性赋值为空串
    //   document.getElementById("fileload").value = "";
    }
  }
};
//图片大小的限制
// if (file) {
//   var fileSize = 0;
//   if (file.size > 1024 * 1024)
//     fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
//   else
//     fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
//   document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
//   document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
//   document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
// }
</script>

<style lang="scss" scoped>
.xxx {
    display: inline-flex;
}
</style>


