<template>
  <div class="container">
    <div calss="row">
        <table class="table">
            <tr>
                <th class="text-right table-primary">No</th>
                <td class="text-center">{{empInfo.emp_no}}</td>
            </tr>
            <tr>
                <th class="text-right table-primary">name</th>
                <td class="text-center">{{`${empInfo.first_name}, ${empInfo.last_name}`}}</td>
            </tr>
            <tr>
                <th class="text-right table-primary">gender</th>
                <td class="text-center">{{empGender}}</td>
            </tr>
            <tr>
                <th class="text-right table-primary">hiredate</th>
                <td class="text-center">{{empInfo.hire_date}}</td>
            </tr>
            <tr>
                <th class="text-right table-primary">salary</th>
                <td class="text-center">{{empInfo.salary}}</td>
            </tr>
            <tr>
                <th class="text-right table-primary">deptname</th>
                <td class="text-center">{{empInfo.dept_name}}</td>
            </tr>
        </table>

    </div>
    <div class="row">
        <button class="btn btn-info" @click="goToUpdate(empInfo.emp_no)">수정</button>
        <router-link to="/" class="btn btn-success">목록</router-link>
        <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from'axios';

export default {
    data(){
        return {
            searchNo:'',
            empInfo: {}
        }
    },
    computed: {
        empGender(){
            return this.empInfo.gender == 'M'? '남' : '여';
        }
    },
    created(){
        this.searchNo = this.$route.query.eno;
        this.getEmpInfo();
    },
    methods: {
         async getEmpInfo(){
            let result = await axios.get(`/api/emps/${this.searchNo}`)
                                    .catch(err=>{console.log(err)});
            this.empInfo = result.data;
            console.log('empInfo test');
            console.log(result.data);
         },
         async deleteInfo(eno){ //delete 원래 body존재안함
            let data = { //postman에서 넘긴 것과 같은 형태로 보내야
                param: {
                    to_date : '2023-12-07' 
                }
            }
            let result = await axios.delete(`api/emps/${eno}`, { data : data}) //alert창으로 입력받기
                                    .catch(err=>{console.log(err)});
            let count = result.data.affectiveRows;
            if(count == 0){
                alert('정상적으로 삭제되지않았습니다');
            }else{ 
                alert('정상적으로 삭제되었습니다.');
                this.$router.push({name:'empList'})
            }
         },
          goToUpdate(no){
             this.$router.push({path: '/empFormView', query: {eno: no}})
          }
    }
}
</script>

<style>

</style>