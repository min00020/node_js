<template>
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
    export default {
        name : 'VueComponent',
        data(){
            return{
                msg : '2023-11-30'
            }
        }
    }
</script>
<style scoped> /*scoped하면 여기만 적용됨!*/
p {
    background-color: burlywood;
}
</style>