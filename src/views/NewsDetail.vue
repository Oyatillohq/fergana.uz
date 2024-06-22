<template>
    <div class="news-detail">
        <div class="container">

            
        <div class="data" style="width: 310px;">
                <div class="news-detail__card" v-for="item in detail?.data?.last_news" :key="item" >
                    <h3 class="title">{{ item.category_id }}</h3>
                    <img :src="item.image" alt="">
                    <router-link to="`/`" class="Uz-desc">
                        {{ item.title }}
                    </router-link>
                    <div class="time-info">
                        <div class="time-wrap">
                            <img src="@/assets/images/png/clock.png" alt="">
                            <h2>{{item.date}}</h2>
                        </div>
                        <div class="time-wrap">
                            <img src="@/assets/images/png/ease.png" alt="">
                            <h2>{{ item.count_view }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import services from '@/services/services';
import { useRoute } from 'vue-router';
const route = useRoute()
const detail = ref({})
const getDetail = async () => {
    const res = await services.getNewsDetail(route.params.slug)
    detail.value = res.data
}
getDetail();
console.log(detail?.data?.news_detail);
</script>

<style lang="scss" scoped>
.data {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    .title{
        color: #DFAD2A;
    }
}

.header {
    font-size: 34px;
    text-align: center;
    margin-bottom: 40px;
}

.container {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.text-wrapper {
    font-size: 20px;

}

.news-detail__html {

    * {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>