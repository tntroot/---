<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components:{
        RouterLink,
    },
    data() {
        return {
            nav:[
                {name:"", chinese:"推薦"},
                {name:"HotSeller", chinese:"熱銷"},
                {name:"Discount", chinese:"折扣"},
                {name:"MustDrink", chinese:"夏日冰咖必喝榜"},
                {name:"MustHave", chinese:"進店必喝"},
                {name:"OnlyDrinkAmerican", chinese:"只喝美式"},
                {name:"ExquisiteSpecial", chinese:"精爽特調"},
                {name:"ClassicMilkCoffee", chinese:"經典奶咖"},
                {name:"CreativeMilkCoffee", chinese:"創意奶咖"}
            ]
        }
    },
}
</script>
<template>
    <div class="">
        <RouterLink  :to="`/store/${item.name}`" v-for="(item,index) in nav" :class="{'nav ':true,'active':index === 0}">
           {{ item.chinese }}   
        </RouterLink>
    </div>
    
    
</template>

<style lang="scss" scoped>
    .nav{
        display: block;
        padding: 2.5rem 2.5rem ;
        font-size: 2rem;
        background-color: #9c9c9c;  
        text-align: center;
    }
    .nav.active{
        font-weight: bolder;
        background-color: #d6d6d6;  
    }
</style>