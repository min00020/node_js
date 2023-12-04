<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption> <!--전체 게시글 수-->
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user,idx) in userList" @click="goToUserInfo(user.user_id)">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ dateFormat(user.join_date, 'yyyy년MM월dd일') }}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                userList : []
            }
        },
        computed : {
            count(){
                return this.userList.length;
            }
        },
        created(){
            //컴포넌트가 초기화할 데이터 관련 진행
            this.getUserList(); //methods 실행되는 공간
        },
        methods : {
            async getUserList(){
                let result = await axios.get('/api/users') //서버쪽에서 CORS 허용(해소)시켜줘야함. 개발도중 origin 자주 바뀜
                                 .catch(err=>{
                                     console.log(err) ;                                    
                                })
                let list = result.data;
               this.userList = list;
            },
            goToUserInfo(id){
                this.$router.push({ path : 'userInfo', query : {userId : id} }); 
                //name : router로 등록할 때 사용한 name 속성
                //params : path 속성이 '/target/:id' 일 때 {'id' : 100} /경로가 어떤 변수값을 가질건지 지정되어있을 때
                //push를 통해서 객체 넘어감 / name기반으로 불러와도 됨
                //path:나중에 라우터에 등록할 이름, query:넘겨줄 키
            },
            dateFormat(value){ //yyyy년MM월dd일
                let date = new Date(value);
                let year = date.getFullYear();
                //let month = ('0' + (date.getMonth()+1)).slice(-2);
                //let day = ('0' + (date.getDate())).slice(-2);

                let month=date.getMonth()+1;
                let day = date.getDate();
                if(month < 10) { month = '0' + month; }
                if(day < 10) { day = '0' + day; }
                
                 return `${year}년 ${month}월 ${day}일`;

                // let result = format.replace('yyyy', year)
                //                     .replace('MM',month)
                //                     .replace('dd',day);
                // return result;
                
            }
        }

    }
</script>
