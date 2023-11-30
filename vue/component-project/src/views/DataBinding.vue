<template>
    <div>
        <h1>{{ title + '!!!'}}</h1> <!--템플릿문법-->
        <h2 v-bind:name="'sample'" v-text="title" /> <!--text속성에 접근하는 directive, ''안넣으면 변수 호출-->
        <p v-html="tagList"/>
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel" >
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel" >
         <p>{{ numberModel + 10000}}</p>
         <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
         </select>
         <p>{{ selectModel }}</p>
         <textarea v-model="textModel"/>
         <hr>
         <input type="checkbox" v-model="chData" true-value="'-'" false-value="T-T">
         <p>{{ chData }}</p>
         <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p> {{ city }} </p>
         </div>

    </div>
</template>
<script>
    export default{
        data(){ //리턴타입 객체
            return {
                title : 'Hello, Vue.js',  //이 component가 다루는 변수(property)
                tagList : '<strong>Today is ... </strong>',
                valueModel : 'Korea',
                numberModel : '0',
                selectModel : '',
                textModel : '백견불여일타',
                chData : '',
                city : ''
            }
        }
    }
</script>

