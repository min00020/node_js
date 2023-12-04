<template>
  <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                        <th class="text-right table-primary">아이디</th>
                        <td class="text-center">
                            <input type="text"> <!--객체 선언 후 객체안에넣기-->
                        </td> 
                </tr>
                <tr>
                    <th class="text-right table-primary">비밀번호</th>
                    <td class="text-center">
                         <input type="password">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                         <input type="text">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                         <input type="radio" value="m">남자
                         <input type="radio" value="f">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">
                         <input type="number">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">
                         <input type="date">
                    </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success">저장</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchNo:'',
            userInfo : {}
        }
    },
    created(){
        this.searchNo = this.$route.query.userNo;
        this.getUserInfo();
    },
    methods : {
        async getUserInfo(){
            let result = await axios.get(`/api/users/${this.searchNo}`)
        }
    }
}
</script>

<style>

</style>