//store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

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
    mutations : { //동기식, state에만 접근 가능
        increment(state){
            state.count++;
        },
        addProduct(state,info){
            state.cart.push(info);
        }
    },
    actions : { //비동기, 전체에 접근가능
        addProduct(context,info){ //두번째 변수로 컴포넌트가 넘기는 값 받음
            setTimeout(()=>{
                context.commit('addProduct',info);
            },1000);
        }
    },
    plugins : [
        createPersistedState({ //배열안에서 호출하는 형태로
            paths : ['cart'] //데이터 선별>state에 정의된 변수 이름 적기
        }) 

    ]
});

export default store;