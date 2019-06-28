<template>
  <div>
      <h4>使用 span,接收 String|Number</h4>
    <s-row>
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
    </s-row>
    <br>
    <s-row>
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
    </s-row>
    <br>
    <s-row>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
    </s-row>
    <br>
    <s-row>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
    </s-row>
    <h5>示例</h5>
    <div><pre><code>{{code1}}</code></pre></div>
    <h4>使用gutter,接收 String|Number</h4>
    <s-row gutter="10">
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
    </s-row>
     <div><pre><code>{{code3}}</code></pre></div>
    <h4>使用gutter、span、offset,offset，接收Number|String</h4>
    <s-row gutter="10">
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
      <s-col span="8" offset="4">
        <div class="colDemo">8</div>
      </s-col>
    </s-row>
    <br>
    <s-row gutter="20">
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6" offset="2">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6" offset="2">
        <div class="colDemo">6</div>
      </s-col>
    </s-row>
    <h5>示例</h5>
    <div><pre><code>{{code2}}</code></pre></div>
    <h4>响应式布局</h4>
    <p>绑定ipad、pc、narrowPc、widePc、pc， 接收 Object</p>
    <s-row class="demobox">
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
    </s-row>
    <div><pre><code>{{code4}}</code></pre></div>
  </div>
</template>

<script>
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";
export default {
    name: 'grid-demos',
  data() {
    return {
        code1:`
    <s-row>
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
    </s-row>

    <s-row>
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
    </s-row>

    <s-row>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
    </s-row>

    <s-row>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
      <s-col span="4">
        <div class="colDemo">4</div>
      </s-col>
    </s-row>`.replace(/^\s/g,''),
    code2: 
    `
    <s-row gutter="10">
      <s-col span="8">
        <div class="colDemo">8</div>
      </s-col>
      <s-col span="8" offset="4">
        <div class="colDemo">8</div>
      </s-col>
    </s-row>
    <br>
    <s-row gutter="20">
      <s-col span="6">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6" offset="2">
        <div class="colDemo">6</div>
      </s-col>
      <s-col span="6" offset="2">
        <div class="colDemo">6</div>
      </s-col>
    </s-row>`.replace(/^\s/g,''),
    code3:`
    <s-row gutter="10">
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
      <s-col span="12">
        <div class="colDemo">12</div>
      </s-col>
    </s-row>`.replace(/^\s/g,''), 
    code4: `
    <s-row class="demobox">
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
        <s-col span=12 :ipad={span:8} :pc={span:4} :narrowPc={span:6} :widePc={span:2} class="colDemo">hello</s-col>
    </s-row>`.replace(/^\s/g,''), 
    };
  },
  components: {
    "s-row": Row,
    "s-col": Col
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.colDemo {
  background: rgb(238, 238, 238);
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
}
</style>

