//store.js
import { createStore } from 'vuex';

const store = createStore({
    state(){
        return{
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A"
                }
            ],
            count : 0
        }
    },
    getters : {
        cartCount : (state)=>{
            return state.cart.length; //state : 데이터 성격 강함
        }
    },
    mutations : { //동기식
        increment(state){
            state.count++;
        },
        addProduct(state,info){
            state.cart.push(info);
        }
    },
    // actions : {
    //     addProduct(state,info){ //두번째 변수로 컴포넌트가 넘기는 값 받음

    //     }
    // }
});

export default store;