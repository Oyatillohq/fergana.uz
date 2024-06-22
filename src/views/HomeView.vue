<template>
<main>
  
  <div class="rek-time">
        <div class="container">
            <a href="#"><img src="@/assets/images/jpg/rek1.jpg" alt=""></a>
        </div>
    </div>

    <div class="prisdent">  
        <div class="container">
            <div class="prisdent-wrapper" v-for="banner in bannerNews?.data" :key="banner">
                <div class="prisdent-text-wrapper">

                    <div class="prisdent-title">
                        <p>{{ banner.title }}</p>
                      </div>
                </div>
                <div class="prisdent-img-wrap">
                    <img :src="store.baseUrl + banner.image" alt="rasm yoq">
                </div>
            </div>
        </div>
    </div>
    <div class="Uzbekistan">
        <div class="container">
            <div class="Uzbekistan-text-wrap">
                <h1>Ўзбекистон</h1>
                <a href="#">Барчаси</a>
            </div>
            <span class="uz-lin"></span>

            <div class="Uzbekistan-cards-wrapper">
              <NewsCard v-for="lastnews in latestNews?.data?.last_news " :key="lastnews" :news="lastnews"/>
            </div>
        </div>
    </div>

    <div class="car-news">
        <div class="container">
            <div class="Uzbekistan-text-wrap">
                <h1>Жахон</h1>
                <a href="#">Барчаси</a>
            </div>
            <span class="uz-lin"></span>

            <div class="car-news-wrapper">
                <div class="car-news-img-wrap">
                    <img class="big-car" src="@/assets/images/jpg/big-car.jpg" alt="">
                    <h1 class="car-title">Дунёдаги энг чиройли гиперкар маълум қилинди</h1>
                    <div class="time-info car-time">
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

                <div class="car-items-wrapper">
                    <div class="car-item">
                        <a href="#"><h1>Бразилия президенти коронавирусга қарши эмланишдан воз кечди</h1></a>
                        <div class="time-info car-time">
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
                    <span class="uz-lin uz-lin-car"></span>

                    <div class="car-item">
                        <a href="#"><h1>Бразилия президенти коронавирусга қарши эмланишдан воз кечди</h1></a>
                        <div class="time-info car-time">
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
                    <span class="uz-lin uz-lin-car"></span>

                    <div class="car-item">
                        <a href="#"><h1>Шавкат Мирзиёев МДҲ раҳбарлари кенгашининг юбилей мажлисида иштирок этди</h1></a>
                        <div class="time-info car-time">
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
                    <span class="uz-lin uz-lin-car"></span>

                    <div class="car-item">
                     <a href="#"><h1>15 октябрь — Халқаро қишлоқ аёллари куни. Бу кун ҳақида бизга</h1></a>
                        <div class="time-info car-time">
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
                    <span class="uz-lin uz-lin-car"></span>

                    <div class="car-item">
                        <a href="#"><h1>Бразилия президенти коронавирусга қарши эмланишдан воз кечди</h1></a>
                        <div class="time-info car-time">
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
                    <span class="uz-lin uz-lin-car"></span>
                </div>
            </div>
        </div>
    </div>

    <div class="sport">
        <div class="container">
            <div class="Uzbekistan-text-wrap">
                <h1>Спорт</h1>
                <a href="#">Барчаси</a>
            </div>
            <span class="uz-lin"></span>

            
            <div class="Uzbekistan-cards-wrapper">
                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img1.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img2.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img3.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img4.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/spor-card-img5.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img6.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img7.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="Uzbekistan-card">
                    <img class="prisdent-card-img" src="@/assets/images/jpg/sport-card-img8.jpg" alt="">
                    <h3 class="Uz-card-info">Ўзбекистон</h3>
                    <p class="Uz-desc">Шавкат Мирзиёев Олий Евросиё иқтисодий кенгашининг видеоанжуман шаклидаги йиғилишида иштирок этди</p>
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

                <div class="rek-2">
                    <a href="#"><img src="@/assets/images/jpg/rek-2.jpg" alt=""></a>
                </div>
            </div>
        </div>
    </div>

    <div class="vidio">
        <div class="container">
            <div class="vidio-wrapper">
                <div class="vidio-cover">
                    <div class="cover-wrap">
                        <img class="vidio-cover" src="@/assets/images/jpg/vidio-caver.jpg" alt="">
                        <div class="control-wrap">
                            <button>
                                <img class="control-position-1" src="@/assets/images/png/control-round.png" alt="">
                                <img class="control-position-2" src="@/assets/images/png/control-click.png" alt="">
                            </button>
                        </div>
                    </div>

                    <h1 class="vidio-cover-title">Ердаги «Марс», Европадаги қор, Россияда йўлда ерга кириб кетган машиналар. Кун суратлари</h1>

                    <div class="time-info car-time">
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

                <div class="vidio-cover">
                    <div class="cover-wrap">
                        <img class="vidio-cover" src="@/assets/images/jpg/vidio-caver-2.jpg" alt="">
                        <div class="control-wrap">
                            <button>
                                <img class="control-position-1" src="@/assets/images/png/control-round.png" alt="">
                                <img class="control-position-2" src="@/assets/images/png/control-click.png" alt="">
                            </button>
                        </div>
                    </div>

                    <h1 class="vidio-cover-title">Ердаги «Марс», Европадаги қор, Россияда йўлда ерга кириб кетган машиналар. Кун суратлари</h1>

                    <div class="time-info car-time">
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
</main>
</template>

<script setup>
import {useStore} from "@/store/store"
import NewsCard from "@/components/NewsCard.vue";
import services from "@/services/services" 
import { onMounted, ref} from "vue";

const store  = useStore()

const bannerNews = ref({})
const latestNews = ref({})
async function getLatestNews() {
  const res = await services.getLatestNews()
  latestNews.value = res.data
}
 async function getBannerNews() {
  const res = await services.getBannerNews()
  bannerNews.value = res.data
}
getBannerNews();
getLatestNews();
</script>

<style lang="scss" scoped>

</style>        