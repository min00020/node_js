<template>
   <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_no" readonly>
                    </td> 
                </tr>
                <tr>
                    <th class="text-right table-primary">아이디</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_id" readonly> <!--객체 선언 후 객체안에넣기-->
                    </td> 
                </tr>
                <tr>
                    <th class="text-right table-primary">비밀번호</th>
                    <td class="text-center">
                         <input type="password" v-model="userInfo.user_pwd">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                         <input type="text" v-model="userInfo.user_name">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                         <input type="radio" value="m" v-model="userInfo.user_gender">남자
                         <input type="radio" value="f" v-model="userInfo.user_gender">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">
                         <input type="number" v-model="userInfo.user_age">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">
                         <input type="date" v-model="userInfo.join_date">
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="updateInfo">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
            return{
                searchNo : '',
                userInfo : {}
            }
        },
    created(){
            this.searchNo = this.$route.query.userNo; 
            this.getUserInfo();
    },
    methods: {
        async getUserInfo(){ //ajax로 돌릴거니까 비동기!
                let result = await axios.get(`/api/users/${this.searchNo}`) //CORS허용하지 않은 서버에는 api붙여야
                                        .catch(err=>console.log(err)); //result 하나의 객체로 넘어옴
                this.userInfo = result.data; 
                let newDate = this.dateFormat(this.userInfo.join_date,'yyyy-MM-dd');
                this.userInfo.join_date = newDate;
        },
        dateFormat(value){ 
                let date = new Date(value);
                let year = date.getFullYear();
                let month = ('0' + (date.getMonth()+1)).slice(-2);
                let day = ('0' + (date.getDate())).slice(-2);
                
                return `${year}-${month}-${day}`;
        },
         async updateInfo(){
            //if(!this.validation()) return; // true>통신진행시키는 코드라 다음 진행 코드 전체를 {}안에 다 넣어야하니까

            //post 사용
            let data = {
                "param" : this.userInfo
            }; //userInfo그대로 못보냄. param이라는 키에 userInfo같이보내야. (postman 참고)
            let result 
                = await axios
                    .put(`/api/users/${this.userInfo.user_no}`, data)
                    .catch(err=>console.log(err));
                console.log(result.data);

            console.log(result.data);
            if(result.data.changedRows == 0){
                alert(`수정되지 않았습니다. \n메세지를 확인해주세요. \n${result.data.message}`)
            }else{
                alert(`정상적으로 수정되었습니다.`);
                
            }
        }
       
    }
}
</script>

<style>

</style>