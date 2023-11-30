<template>
  <VueComponent/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import VueComponent from './components/VueComponent.vue'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    VueComponent //등록하면 template에서 태그형태로 사용가능
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
