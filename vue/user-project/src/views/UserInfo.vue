<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No</th>
                    <td class="text-center"> {{userInfo.user_no}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">{{userInfo.user_id}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">{{userInfo.user_pwd}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Name</th>
                    <td class="text-center">{{userInfo.user_name}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Gender</th>
                    <td class="text-center">{{userGender}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Date</th>
                    <td class="text-center">{{joinDate}}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button  class="btn btn-info" @click="goToUpdate(userInfo.user_no)">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link>
            <button class="btn btn-warning" @click="deleteInfo(userInfo.user_no)">삭제</button> <!--router랑 상관없음!!-->
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
            this.searchNo = this.$route.query.userNo; //router호출하면 route동작 (UserList.vue) query 속성에 정보 담겨있음
            this.getUserInfo();
        },
        computed : {
            userGender(){
                return this.userInfo.user_gender == 'm' ? '남' : '여';
            },
            joinDate(){
                let date = new Date(this.userInfo.join_date);
                let year = date.getFullYear();
                let month = ('0' + (date.getMonth()+1)).slice(-2);
                let day = ('0' + (date.getDate())).slice(-2);
                return `${year}-${month}-${day}`;
            }
        },
        methods : {
            async getUserInfo(){ //ajax로 돌릴거니까 비동기!
                let result = await axios.get(`/api/users/${this.searchNo}`) //CORS허용하지 않은 서버에는 api붙여야
                                        .catch(err=>console.log(err)); //result 하나의 객체로 넘어옴
                this.userInfo = result.data;
            },
            async deleteInfo(userNo){
                let result = await axios.delete(`/api/users/${userNo}`)
                                        .catch(err=>console.log(err));
                console.log(result.data);
                let count = result.data.affectedRows;
                if(count == 0){
                    alert('정상적으로 삭제되지 않았습니다.');
                }else{
                    alert('정상적으로 삭제되었습니다.');
                    this.$router.push({name:'userList'});
                }
            },
            goToUpdate(no){
                this.$router.push({path : '/userUpdate', query : { userNo : no }})
            }
        }

    }
</script>