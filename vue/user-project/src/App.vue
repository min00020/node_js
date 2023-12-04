<template>
  <div>
    <Header  /> <!--컴포넌트 이름을 태그처럼 사용-->
    <router-view/>
  </div>
</template>
<script>
import Header from './layouts/Header.vue'

export default {
  components : { //해당 페이지를 관리하는 객체가 독립적으로 특정 컴포넌트 가지고있는 경우
      Header  //키와 변수값 같을 경우 생략 (Header : Header)
  }
}
</script>
