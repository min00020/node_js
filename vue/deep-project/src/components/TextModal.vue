<template>
    <Layout>
        <template v-slot:header>
            <h1>팝업 제목</h1>
        </template>
        <template v-slot:default>
            <p>팝업 컨텐츠1</p>
            <p>팝업 컨텐츠2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </Layout> <!--slot일 경우 여는태그 닫는태그-->

</template>
<script>
import Layout from './ModalLayout.vue'

export default {
    components :{
        Layout
    }    
}
</script>