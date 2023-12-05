<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused"/>
    <component v-bind:is="selected"></component>
    <!--is:동적 컴포넌트 부여할 때 사용. 컴포넌트 태그가 가지고있는 위치에 어떤 것을 부여할 건지
        라우터 없이 컴포넌트 전환할 때-->
  </div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue'
import SlotCom from './components/TextModal.vue'
import Composition from './components/CompositionInterface.vue'
import StoreCom from "./components/StoreComponent.vue"

export default {
  name: "app",
  data(){
    return {
      selected : "PropsCom",
      isFocused : false
    }
  },
  components : {
    PropsCom, //'PropsCom' : {} 의 약어
    SlotCom,
    Composition,
    StoreCom
  }
}
</script>

<style>

</style>