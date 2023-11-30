<template>
    <div>
        
    </div>
</template>
<script>
export default{
    components : [], //여러개의 자식 components있을 수 있어서 배열로 처리
    data(){
        return{
            today: new Date()
        }
    },
    computed: {
        AfterYear(){
            return this.today.setFullYear(this.today.getFullYear() + 1)
        }
    },
    method:{},
    watch:{},
    created() {},
    mounted() {}
}
</script>
<style>

</style>