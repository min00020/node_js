<template>
    <table>
        <tr>
            <th>제목</th>
            <td>{{ title }}</td>
            <th>조회수</th>
            <td>{{ readInfo }}</td>
        </tr>
        <tr>
            <th>작성자</th>
            <td>{{ writer }}</td>    
            <th>작성일자</th>
            <td>{{ regdate }}</td>
        </tr>
        <tr>
            <th>내용</th>
            <td>{{ content }}</td>    
        </tr>
        <tr>
            <button @click="updateInfo">업데이트</button>
        </tr>
    </table>
</template>
<script>
export default {
    //props : ['title', 'count','writer', 'regdate', 'content']
    //한 항목이라도 유효성 체크하려면 객체타입으로
    props : {
        title : String,
        count : {
            type : Number,
            default : 0
        },
        writer : {
            type : [String, Object], //타입 2가지>배열로 정의
            default : function(){ // 값이 함수, return 타입 객체
                return {first: 'Adward', second : 'Ian'}
            }
        },
        regdate : {
            required : true,
            validator : function(value){
                //yyyy-MM-dd
                let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/
                return !(value.match(format)==null); //match가 true값을 반환하지 않아서
            }
        },
        content : String
    },
    computed : {
        readInfo(){
            return this.count + 1;
        }
    },
    methods : {
        updateInfo(){ //이벤트 전달 (부모컴포넌트한테)
            this.$emit('update-info',this.readInfo);
        }
    },
    watch: { //데이터 전달 (실시간으로 변경 감지 > 실시간으로 부모한테 업데이트)
         readInfo(){
             this.$emit('update-info',this.readInfo);
        }
    }
}
</script>