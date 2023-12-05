<template>
  <div>
    <PageTitle title="Hello, world!" /> 
    <PageContent v-bind="info" @update-info="handler" />
    <RefComponent ref="child" />
    <button @click="childHandler">자식제어</button>
    <!-- <PageContent :title="header" v-bind:count="10" :writer="['Adward']" :regdate="'2023-12-05'" 
                 :content="{ first : 'Node.js', second: 'Vue.js'}"/> -->
  </div>
  <!--page-title cdm 방식?/vue cli환경에선 자동변환됨
      여긴 javascript영역이라 :title X bind 붙이면 안됨!-->
</template>

<script>
import PageTitle from './PageTitle.vue'
import PageContent from './PageContent.vue'
import RefComponent from './RefComponent.vue'

export default {
    data(){
        return {
            header : '',
            info : {
                title : 'Today is',
                count : '',
                writer : 'adward',
                regdate : '2023-12-05',
                content : '내용없음'
            }
        }
    },
    components: {
        PageTitle ,
        PageContent,
        RefComponent
    },
    methods : {
        handler(value){
            alert(value);
        },
        childHandler(){
            //this.$refs.child.content = '부모가보내는데이터'; // template의 <RefComponent ref="child" /> 
            //this.$refs.child.plusCount(); //자식컴포넌트의 함수 직접적으로 불러오기 가능
            this.$refs.child.$refs.cBtn.click(); //각 컴포넌트가 $refs 속성 가지고있음>자식이든 표준html태그든 직접!! 제어 가능

        }
    }
}

</script>

<style>

</style>