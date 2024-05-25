<script>
import navView from '../components/nav.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    components:{
        navView,RouterView,
    }
}
</script>
<template>
    <RouterLink  to="/store">商店</RouterLink>
</template>

<style lang="">
    
</style>