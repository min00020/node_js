<template>
    <h2>{{title}}</h2>
</template>

<script>
//자식컴포넌트
export default {
    props : ['title'] //유효성검사없이 정해진이름으로 넘어온 데이터 받음
}
</script>