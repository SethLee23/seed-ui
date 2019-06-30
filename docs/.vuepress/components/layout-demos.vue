<template>
  <div>
    <s-layout style="color: white; overflow:hidden;">
            <s-layout-header style=" background:#25CCF7;">header</s-layout-header>
            <s-layout>
                <s-layout-sider style=" background:#3B3B98; width:200px;">sider</s-layout-sider>
                <s-layout-content style="height: 100px; background:#9AECDB;">content</s-layout-content>
            </s-layout>
            <s-layout-footer style="height: 50px; background:#58B19F">footer</s-layout-footer>
        </s-Layout>
        <br>
        <br>
        <s-layout style="color: white; overflow:hidden;">
            <s-layout-sider style=" background:#fff200; width:200px;">
                sider
            </s-layout-sider>
            <s-layout>
                <s-layout-header style="height: 50px; background:#ffaf40;">
                    header
                </s-layout-header>
                <s-layout-content style="height: 100px; background:#32ff7e;">
                    content
                </s-layout-content>
                <s-layout-footer style="height: 50px; background:#3ae374;">
                    footer
                </s-layout-footer>
            </s-layout>
        </s-layout>
        <br>
        <br>
        <s-layout style="color: white; overflow:hidden;">
            <s-layout-header style="height: 50px; background:#70a1ff;">
                header
            </s-layout-header>
            <s-layout-content style="height: 100px; background:#2ed573;">
                content
            </s-layout-content>
            <s-layout-footer style="height: 50px; background:#5352ed">
                footer
            </s-layout-footer>
        </s-layout>
  </div>
</template>

<script>
import LayoutContent from "../../../src/layout/layout-content";
import LayoutFooter from "../../../src/layout/layout-footer";
import LayoutHeader from "../../../src/layout/layout-header";
import LayoutSider from "../../../src/layout/layout-sider";
import Layout from "../../../src/layout/layout";
export default {
  name: 'layout-demos',
  data() {
    return {
    
    };
  },
  components: {
    "s-layout": Layout,
    "s-layout-content": LayoutContent,
    "s-layout-footer": LayoutFooter,
    "s-layout-sider": LayoutSider,
    "s-layout-header": LayoutHeader,
  }
};
</script>

<style lang="less">
body,
        * {
            margin: 0;
            padding: 0;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }
</style>

