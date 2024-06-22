<template>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr) ">
        <div class="container">
            <div class="Uzbekistan-card" style="width: 310px; display:flex " v-for="item in detail?.data?.news_list "
                :key="item">
                <img class="prisdent-card-img" :src="`${store.baseUrl}` + item.image">
                <h2>{{ baseUrl }}</h2>
                <router-link to="/" class="Uz-card-info">{{ item.category_id }}</router-link>
                <div class="Uzbekistan-card__text-wrapper">

                    <router-link to="/" class="Uz-desc">
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

<style lang="scss" scoped></style>