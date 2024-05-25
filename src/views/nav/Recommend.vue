<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            goods:[
                {
                    title:"野生拿鐵",
                    pic:"../../../src/assets/img/1.png",
                    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing consectetur adipisicing elit elit. Cum, labore.",
                    sellNumber: 200,
                    favorRate: 95,
                    price: 20,

                    num:0
                },
                {
                    title:"奶香拿鐵",
                    pic:".../../../src/assets/img/2.png",
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit consectetur adipisicing elit elit. Obcaecati, sint?",
                    sellNumber: 100,
                    favorRate: 80,
                    price: 30,

                    num:0
                },
                {
                    title:"杏仁拿鐵",
                    pic:"../../../src/assets/img/3.png",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit consectetur adipisicing elit elit. Totam, sit?",
                    sellNumber: 200,
                    favorRate: 59,
                    price: 40,

                    num:0
                },
            ]
        }
    },
}
</script>
<template>
    
    <div v-for="item in goods" class=" flex items-center p-12 ">
        <div>
            <img :src="item.pic" alt="" class="img clip0">
        </div>
        <div class=" ml-6 w-full">
            <h1 class="text">{{ item.title }}</h1>
            <h2 class="desc">{{ item.desc }}</h2>
            <h3 class="text-[#5c5c5c]">{{ `月售 ${item.sellNumber}　　 好評率 ${item.favorRate} %` }}</h3>
            <div class="flex justify-between items-center mt-3">
                <p class="text-3xl font-bold text-[#ff9854]">{{ `$ ${item.price}` }}</p>
                <div class="flex items-center">
                    <Icon icon="zondicons:minus-solid" class=" text-[#ff3d3d] rounded-full w-12 h-12 cursor-pointer hover:scale-110 active:scale-90" @click=""/>
                    <p class="text-4xl mx-3">{{ item.num }}</p>
                    <Icon icon="carbon:add-filled" class="text-[#34eaf7] rounded-full w-12 h-12 cursor-pointer hover:scale-110 active:scale-90" @click=""/>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .img{
        width: 100px;
        border-radius: 9999px;
    }
    .img.clip0{
        clip-path: circle(50% at 50% 50%);
    }

    .text{
        font-size: 1.5rem;
        font-weight: bolder;
        margin-block: 0.5rem 0.5rem;
    }
    .desc{
        font-size: 1rem;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        margin-block-end: 0.5rem;
    }
</style>