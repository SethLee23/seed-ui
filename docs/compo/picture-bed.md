---
title: 'upload'
---
# upload -- 上传文件
## 示例
<ClientOnly>
<upload-demos/>
</ClientOnly>

## Attributes
### button

|参数           |说明           |类型     |可选值  |默认值 |
|:-------------:|------------|:-------:|:------:|:------:|
| uploadUrl | 将文件上传到传入的 API | string | - | - |

## 引入组件
```js
import {Upload} from "seed-ui-work";
export default {
  name: "upload-demos",
  data() {
    return {
    };
  },
  components: {
    "s-upload": Upload,
  },
};
```