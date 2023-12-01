<template>
 <div>
    <input type="number" v-model="grade">
    <p v-if="grade >= 90"> 성적 : A </p>
    <p v-else-if="grade >= 80"> 성적 : B </p>
    <p v-else-if="grade >= 70"> 성적 : C </p>
    <p v-else> 성적 : D </p>
    <p>이거 if태그 중간에 들어가면 오류나여</p>
    <hr>
    <input type="checkbox" v-model="chData"> 선택
    <p v-show="chData">Hello, World!!'n'*</p>
 </div>
</template>
<script>
export default {
    data(){
        return{
            grade:'',
            chData:''
        }
    }
}
</script>

