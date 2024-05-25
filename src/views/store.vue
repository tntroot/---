<script>
import navView from '../components/nav.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    components:{
        navView,
    }
}
</script>
<template>
    <div class=" w-full flex ">
        <navView class=""  />
        <div class="w-full">
            <RouterView />
        </div>
    </div>
</template>

<style lang="">
    
</style>