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
         <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
         </div>
        <hr>
        <img v-bind:style="styleData" v-bind:src="imgUrl">
        <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding First</div>
        <div class="container" v-bind:class="myClass">Class Binding Second</div>
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
                city : [],
                hobby : '운동',
                imgUrl:'https://img.freepik.com/premium-photo/small-sea-wave-on-bright-sea_73683-876.jpg',
                styleData : {
                    backgroundColor : 'skyblue',
                    width : '200px'
                },
                backSetting : 'background-color:skyblue; width:200px',
                addStyle : 'height: 200px;',
                isActive : false,
                //hasError : !this.isActive //반대로 동작하는거X isActive 초기값의 반대일뿐
                myClass : 'active' //값으로 클래스 명 가지고있는 거 > 클래스 자체를 제어 (ex:text-red 넣거나)
            }
        },
        computed : {
            hasError(){
                return !this.isActive //이렇게 해야 반대로 동작
            }
        }
    }
</script>

<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active{
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color: red;
    }
</style>