<template>
    <div>
        <input type="number" v-model="price"> 원
        <br>
        <input type="number" v-model="count"> 개
        <p> 부가세 포함 : {{ amount }}</p>
        <p> 부가세 10% : {{ tax }}</p>
        <p> 결제 금액 : {{ total }} </p>
    </div>    
</template>

<script>
const computed = {
        data(){
            return{
                price : 0,
                count : 0
            }
        },
        computed : {
            amount(){
                return this.price * this. count;
            },
            tax(){
                return this.amount * 0.1;
            },
            total(){
                return this.amount + this.tax;
            }
        }
}
const watch = {
    data(){
        return {
            price : 0,
            count : 0,
            amount : '',
            tax : '',
            total : ''
        }
    },
    watch : {
        price(){
            this.amount = this.price * this.count;
        },
        count(){
            this.amount = this.price * this.count;
        },
        amount(){
            this.tax = this.amount * 0.1;
            this.total = this.amount + this.tax;
        }
    }
} 
export default computed

</script>
