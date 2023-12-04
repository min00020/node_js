<template>
   <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                        <th class="text-right table-primary">아이디</th>
                        <td class="text-center">
                            <input type="text" v-model="userInfo.user_id"> <!--객체 선언 후 객체안에넣기-->
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
            <button class="btn btn-success" @click="insertInfo">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            userInfo : {
                user_id : "",
                user_pwd : "",
                user_name : null,
                user_gender : null,
                user_age : 0,
                join_date : null
            }
        }
    },
    created(){
        this.userInfo.join_date = this.getToday();

    },
    methods: {
        async insertInfo(){
            if(!this.validation()) return; // true>통신진행시키는 코드라 다음 진행 코드 전체를 {}안에 다 넣어야하니까

            //post 사용
            let data = {
                "param" : this.userInfo
            }; //userInfo그대로 못보냄. param이라는 키에 userInfo같이보내야. (postman 참고)
            let result 
                = await axios('/api/users', {
                    method : 'post',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    data : JSON.stringify(data)
                })
                .catch((err)=>console.log(err));
                 // axios 자동변환: QueryString + JSON데이터 처리해줌
                 // result = await axios.post('/api/users', data)
                //                      .catch(err=>console.log(err));

            console.log(result.data);
            if(result.data.insertId == 0){
                alert(`등록되지 않았습니다. \n메세지를 확인해주세요. \n${result.data.message}`)
            }else{
                alert(`정상적으로 등록되었습니다.\nNo.${result.data.insertId}`);
            }
        },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0'+(today.getMonth()+1)).slice(-2);
            let day = ('0'+today.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        },
        validation(){
            if(this.userInfo.user_id == ''){
                alert('아이디가 입력되지 않았습니다.');
                return false;
            }
            if(this.userInfo.user_pwd == ''){
                alert('비밀번호가 입력되지 않았습니다.');
                return false;
            }
            return true;
        }
    }
}
</script>

<style>

</style>