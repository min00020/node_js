<template>
  <div class="container">
    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>name</th>
                <th>hire date</th>
                <th>dept name</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(emp,idx) in empList" @click="goToInfo(emp.emp_no)"> 
                <!--for에서 idx필수 / click이벤트할 때 no 넘겨줘야함-->
                <td>{{emp.emp_no}}</td>
                <td>{{`${emp.first_name}, ${emp.last_name}`}}</td>
                <td>{{$dateFormat(emp.hire_date,'yyyy년 MM월 dd일')}}</td>
                <td>{{emp.dept_name}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'; //fetch말고 axios 사용하기

export default {
    data(){
        return {
            empList : []
        }
    },
    created(){ //페이지 열자마자 데이터 보여야해서 axios기반으로 create hook
        this.getEmpList();
    },
    methods: {
        async getEmpList(){
            let result = await axios.get('/api/emps')
                                    .catch(err=>{
                                        console.log(err);
                                    })
            this.empList = result.data;
            console.log('empList test')
            console.log(result.data)
        },
        goToInfo(eno){ //사원번호 받아온 거: 내부페이지전환> router쪽으로 넘겨줘야
            this.$router.push({name : 'empInfo', query : {eno:eno}})
        }
       
    }

}
</script>

<style>

</style>