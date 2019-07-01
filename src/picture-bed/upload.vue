<template>
  <div>
    <div class="wrapper" style="display:flex;">
      <div v-for="url in backgroundUrl" class="xxx" :key="url">
        <!--3.放置背景圖片，防止圖片變形-->
        <div class="item" :style="{background:`url(${url}) no-repeat  center/cover`}">
          <s-icon name="red-garbage" style="z-index:22" @click="deleteItem(url)"></s-icon>
          <s-icon name="check-circle" style="z-index:22" v-if="upload"></s-icon>
        </div>
      </div>
      <div class="container">
        <input
          id="fileload"
          type="file"
          @change="preview($event);"
          multiple
          name="upload"
          class="uploadButton"
        />
        <s-icon name="plus"></s-icon>
      </div>
    </div>
    <div class="buttonGroup">
      <s-button types="success" @click="submit" ref="submit">上传</s-button>
      <s-button types="success" @click="call">取消</s-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "../button/button";
export default {
  data() {
    return {
      backgroundUrl: [],
      file: null,
      wrongFile: false,
      upload: false
    };
  },
  props: {
    uploadurl: {
      type: String
    }
  },
  components: {
    "s-button": Button
  },
  methods: {
    deleteItem(url) {
      let index = this.backgroundUrl.indexOf(url);
      this.backgroundUrl.splice(index, 1);
    },
    checkType(file) {
      var fileType = file.type.split("/")[0];
      if (fileType != "image") {
        alert("请上传图片");
        this.wrongFile = true;
        return;
      }
    },
    checkSize(file) {
      var fileSize = Math.round(file.size / 1024 / 1024);
      if (fileSize >= 3) {
        alert("请上传小于少于3M的图片");
        this.wrongFile = true;
        return;
      }
    },
    transformUrl(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      // 1.5.1实现onload接口
      reader.onload = e => {
        // 1.5.2获取文件在流中url，并且保存到data中
        let url = e.target.result;
        this.backgroundUrl.push(url);
      };
    },
    preview(e) {
      //1.1 获取文件框的所有文件
      var file = e.target.files;
      this.file = file;
      //1.2 遍历file
      for (let i = 0; i < file.length; i++) {
        //1.3 可以进行一下文件类型的判断
        this.checkType(file[i]);
        //1.4 进行文件fileSize的判断
        this.checkSize(file[i]);
        if (this.wrongFile) {
          this.wrongFile = false;
          return;
        }
        //1.5 读取文件，转换为 url
        this.transformUrl(file[i]);
      }
      this.$nextTick(() => {
        console.log("fuck");
        console.log(this.backgroundUrl);
      });
    },
    call() {
      // 2. 实现删除最后一个文件的功能
      this.backgroundUrl.pop();
    },
    // 4.上传文件
    submit() {
      let formData = new FormData();
      for (var i = 0; i < this.file; i++) {
        formData.append("attachment", this.file[i]);
      }
      let submitUrl = this.uploadurl;
      if (this.backgroundUrl.length === 0) {
        alert("未上传文件");
        return;
      } else {
        axios
          .post(submitUrl, formData, {
            header: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log(res);
            this.upload = true;
            // alert("上传成功");
          })
          .catch(err => {
            console.log(err);
            alert("上传失败");
          });
      }
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

//   為啥空的？？？
// let arr = [];
// arr[i] = file[i];
// console.log(arr);
</script>

<style lang="less" scoped>
@border-radius: 4px;
.wrapper {
  border: 1px solid rgb(235, 235, 235);
  margin: 10px;
  padding: 10px;
  max-width: 800px;
  display: inline-flex;
  flex-wrap: wrap;
  border-radius: @border-radius;
  .container,
  .item {
    background-color: #fbfdff;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
    margin: 10px;
  }
  .container {
    border: 1px dashed #c0ccda;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .uploadButton {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid red;
      opacity: 0;
      top: 0;
    }
  }
  .item {
    border: 1px solid #c0ccda;
    position: relative;
  }
  &:hover {
    transition: all 0.3s;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 25%);
  }
}

.buttonGroup {
  display: flex;
  margin: 0 5px;
  :nth-child(1) {
    margin-left: 0;
    margin-right: 5px;
  }
  > button {
    margin: 0 5px;
  }
}
.item .s-icon:first-of-type {
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  left: 0;
  bottom: 0;
}
.item .s-icon:last-of-type {
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>


