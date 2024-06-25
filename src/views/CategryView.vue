<template>
    <div style="display: grid; margin-top: 50px
     /* grid-template-columns: repeat(2, 1fr) */
     "> 
        <div class="container" style="display:flex; gap: 50px;">
            <div class="Uzbekistan-card" style="width: 310px; " v-for="item in detail?.data?.news_list " :key="item">
                <img class="prisdent-card-img" :src="`${store.baseUrl}` + item.image">
                <router-link :to="`news/${item.slug}`" class="Uz-card-info">{{ item.category_id }}</router-link>
                <div class="Uzbekistan-card__text-wrapper">

                    <router-link :to="`item/${item.slug}`" class="Uz-desc">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '@/store/store';
import services from '@/services/services';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const store = useStore()
const route = useRoute();
const detail = ref({});
async function getDetailCategory() {
    const res = await services.getDetailCategory(route.params.id, route.params.slug)
    detail.value = res.data
}
getDetailCategory()
console.log(detail);
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>