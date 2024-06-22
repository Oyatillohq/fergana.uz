<template>
    <div class="Uzbekistan-card" style="width: 310px;">
        <img class="prisdent-card-img" width="100%" height="167" :src="store.baseUrl + news?.image" :alt="news?.title">
        <router-link to="/" class="Uz-card-info">Ўзбекистон</router-link>
        <div class="Uzbekistan-card__text-wrapper">

            <router-link :to="`/news/${news?.slug}`" class="Uz-desc">{{ news.title }},
                <!-- {{ props }} -->
            </router-link>
            <div class="time-info">
                <div class="time-wrap">
                    <img src="@/assets/images/png/clock.png" alt="">
                    <h2>11:00 / 13.10.2021</h2>
                </div>
                <div class="time-wrap">
                    <img src="@/assets/images/png/ease.png" alt="">
                    <h2>14550</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { news } = defineProps(['news'])
import {useStore} from '@/store/store';
const store = useStore()
</script>

<style lang="scss" scoped></style>