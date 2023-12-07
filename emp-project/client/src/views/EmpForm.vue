<template>
  <div class="container">
    <div class="row">
        <table class="table">
            <tr>
                <th class="text-right table-primary">empNo</th>
                <td class="text-center">
                    <input type="text" v-model="empInfo.emp_no">
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">first_name</th>
                <td class="text-center">
                    <input type="text" v-model="empInfo.first_name">
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">last_name</th>
                <td class="text-center">
                    <input type="text" v-model="empInfo.last_name">
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">gender</th>
                <td class="text-center">
                    <input type="radio" value="M" v-model="empInfo.gender">남자
                    <input type="radio" value="F" v-model="empInfo.gender">여자
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">hire_date</th>
                <td class="text-center">
                    <input type="text" v-model="empInfo.hire_date">
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">salary</th>
                <td class="text-center">
                    <input type="text" v-model="empInfo.salary">
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">from_date</th>
                <td class="text-center">
                    <input type="text" v-model="empInfo.from_date">
                </td>
            </tr>
            <tr>
                <th class="text-right table-primary">dept_name</th>
                <td class="text-center">
                    <select v-model="empInfo.dept_name">
                        <option value="Development" >Development</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
    <div class="row">
        <button class="btn btn-info" @click="insertInfo">저장</button>
        <button class="btn btn-success" @click="updateInfo">수정</button>

    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            searchNo : '',
            empInfo: {
                emp_no: '',
                first_name:'',
                last_name:'',
                gender:'',
                hire_date:'',
                salary:'',
                from_date:'',
                dept_no:'',
                dept_name: ''
            }
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
         },
        async insertInfo(){
            let data = {
                "param" : this.empInfo
            }
            let result 
                = await axios('/api/emps',{
                    method : 'post',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    data : JSON.stringify(data)
                })
                .catch((err)=>console.log(err));
            console.log(result.data);
        }
    }
}
</script>

<style>

</style>