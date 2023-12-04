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
                    <td class="text-center"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center"></td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button  class="btn btn-info">저장</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>