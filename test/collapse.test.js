const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse/collapse'
import CollapseItem from '../src/collapse/collapse-item'

Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false

//  describe 和 it 由 mocha 提供、sinon.fake 以及 expect、calledWidth 都是 sinon-chai 提供
describe('Collapse', () => {
    it('Collapse存在.', () => {
        expect(Collapse).to.exist
    })
    //分组，接收参数，测试参数
    describe('props', () => {
        it('可以接受selected',(done)=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <s-collapse :selected="['1','3']">
              <s-collapse-item name="1" title="第一个">内容1</s-collapse-item>
              <s-collapse-item name="2" title="第二个">内容2</s-collapse-item>
              <s-collapse-item name="3" title="第三个">内容3</s-collapse-item>
            </s-collapse>
                `
            const vm = new Vue({
                el: div,
            })
            setTimeout(()=>{
                expect(vm.$el.querySelector('.s-content[data-name="1"]')).to.exist
                expect(vm.$el.querySelector('.s-content[data-name="3"]')).to.exist
                done()
            },100) 
        })
        it('可以接受singel',(done)=>{
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <s-collapse :selected="['1','3']" singel>
              <s-collapse-item name="1" title="第一个">内容1</s-collapse-item>
              <s-collapse-item name="2" title="第二个">内容2</s-collapse-item>
              <s-collapse-item name="3" title="第三个">内容3</s-collapse-item>
            </s-collapse>
                `
            const vm = new Vue({
                el: div,
            })
            setTimeout(()=>{
                expect(vm.$el.querySelector('.s-content[data-name="1"]')).to.exist
                expect(vm.$el.querySelector('.s-content[data-name="3"]')).to.exist
                let event = new Event('click')
                let title2 = vm.$el.querySelector('.title[data-title="第二个"]')
                title2.dispatchEvent(event)
                setTimeout(()=>{
                    expect(vm.$el.querySelector('.s-content[data-name="1"]')).to.not.exist
                    expect(vm.$el.querySelector('.s-content[data-name="3"]')).to.not.exist   
                    expect(vm.$el.querySelector('.s-content[data-name="2"]')).to.exist   
                },1000)
                done()
            },1500) 
        })
    })

})