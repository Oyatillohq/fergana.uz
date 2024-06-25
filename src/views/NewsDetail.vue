<template>
    <div class="news-detail">
        <div class="container">

            <div v-html="detail?.data?.news_detail.content" class="news-detail__html"></div>
            <div class="data" style="width: 310px;">
                <div class="rec">
                    <div class="rec-t"></div>Tavsiya etamiz
                </div>
                <router-link :to="`/news/${item.slug}`" class="news-detail__card"
                    v-for="item in detail?.data?.last_news" :key="item">
                    <h3 class="title">{{ item.category_id }}</h3>
                    <img :src="item.image" alt="">
                    <router-link to="/" class="Uz-desc">
                        {{ item.title }}
                    </router-link>
                    <div class="time-info">
                        <div class="time-wrap">
                            <img src="@/assets/images/png/clock.png" alt="">
                            <h2>{{ item.date }}</h2>
                        </div>
                        <div class="time-wrap">
                            <img src="@/assets/images/png/ease.png" alt="">
                            <h2>{{ item.count_view }}</h2>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import services from '@/services/services';
import { useRoute } from 'vue-router';
const route = useRoute()
const detail = ref({});
const getDetail = async () => {
    const res = await services.getNewsDetail(route.params.slug)
    detail.value = res.data
};
getDetail();
import { useStore } from '@/store/store';
const store = useStore()
async function getDetailCategory() {
    const res = await services.getDetailCategory(route.params.id, route.params.slug)
    detail.value = res.data;
    console.log(detail.data.last_news);
}
getDetailCategory()
console.log(detail);
</script>

<style lang="scss" scoped>
.data {
    display: flex;
    flex-direction: column;
    max-width: 380px;

    .title {
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
}

.text-wrapper {
    font-size: 20px;

}

.news-detail__html {
    width: 990px;
    padding-top: 50px;
    * {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
    }
}


.data {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 50px;

    .rec {
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        margin-bottom: -20px;
        display: flex;
        align-items: center;
        justify-content: left;

        &-t {
            width: 15px;
            height: 15px;
            background: #DFAD2A;
            border-radius: 50%;
        }

    }

    .news-detail__card {
        padding: 10px;
        border: 1px solid #c9c9c9;

        &:hover {
            border: 2px solid #DFAD2A;
            cursor: pointer;
        }

    }

}
</style>