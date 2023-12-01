<template>
<div>
    <button type="button" v-on:click="increaseCounter">Add 1</button>
    <button type="button" @click="setCount(7,$event)"> Add 7 </button>
    <p>The Counter is : {{ counter }}</p>
</div>
</template>
<script>
    export default{
        data(){
            return{
                counter: 0
            }
        },
        methods: {
            increaseCounter(e){
                console.log(e);
                 this.counter++;
            },
            setCount(value,event){
                console.log('setCount',event);
                this.counter=this.counter+value;
            }
        }
    
    }

</script>
