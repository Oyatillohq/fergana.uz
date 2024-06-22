<template>
    <div>
        <div class="main-info">
            <div class="container">
                <button class="toggle" id="btn">Узбекча <img src="@/assets/images/png/chevron-down.png" alt=""></button>

                <div class="setting open"></div>

                <div class="modal open">
                    <div class="modal-wrapper">
                        <div class="lang">
                            <button>Uzb</button>
                            <span></span>
                            <button>Rus</button>
                            <span></span>
                            <button>Eng</button>
                        </div>
                        <button class="close-btn">Close</button>
                    </div>
                </div>
                <h2><a href="#">«Фарғоналикларни» </a>телеграмда кузатинг!</h2>

                <button class="search"><img src="@/assets/images/png/search.png" alt=""></button>
            </div>
        </div>

        <header>
            <div class="container">
                <div class="header-wrapper">
                    <div class="burger-menu">
                        <button><img src="@/assets/images/png/burger.png" alt=""></button>
                    </div>
                    <div class="header-logo-wrap">
                        <a href="./index.html"><img src="@/assets/images/svg/header-logo.svg" alt=""></a>
                    </div>

                    <div class="search-media">
                        <button><img src="@/assets/images/png/search2.png" alt=""></button>
                    </div>
                    <nav>
                        <ul>
                            <li v-for="link in categorys?.data " :key="link"><router-link
                                    :to="`/category/${link.slug}/${link.id}`">{{ link?.title }}</router-link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <router-view />
        <footer>
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-logo-wrap">
                        <a href="./index.html"><img src="@/assets/images/svg/footer-logo.svg" alt=""></a>
                    </div>

                    <div class="footer-nav-wrap">
                        <nav>
                            <ul>
                                <li><a href="#">Ўзбекистон</a></li>
                                <li><a href="#">Технология</a></li>
                                <li><a href="#">Жахон</a></li>
                                <li><a href="#">Фарғона</a></li>
                                <li><a href="#">Жамият</a></li>
                                <li><a href="#">Сиёсат</a></li>
                                <li><a href="#">Муҳокама</a></li>
                                <li><a href="#">Спорт</a></li>
                            </ul>
                        </nav>

                        <div class="footer-icons-wrap icons-wrap-2">
                            <div class="footer-icon">
                                <a href="#"><img src="@/assets/images/png/Telegram.png" alt=""></a>
                            </div>

                            <div class="footer-icon">
                                <a href="#"><img src="@/assets/images/png/instagram.png" alt=""></a>
                            </div>

                            <div class="footer-icon">
                                <a href="#"><img src="@/assets/images/png/Face.png" alt=""></a>
                            </div>

                            <div class="footer-icon">
                                <a href="#"><img src="@/assets/images/png/youtube.png" alt=""></a>
                            </div>
                        </div>

                        <span class="footer-linie"></span>
                        <h3 class="figma-time">2021 © Фарғоналиклар Барча ҳуқуқлар ҳимоя қилинган</h3>
                    </div>

                    <div class="footer-icons-wrap">
                        <div class="footer-icon">
                            <a href="#"><img src="@/assets/images/png/Telegram.png" alt=""></a>
                        </div>

                        <div class="footer-icon">
                            <a href="#"><img src="@/assets/images/png/instagram.png" alt=""></a>
                        </div>

                        <div class="footer-icon">
                            <a href="#"><img src="@/assets/images/png/Face.png" alt=""></a>
                        </div>

                        <div class="footer-icon">
                            <a href="#"><img src="@/assets/images/png/youtube.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import services from './services/services';
import { ref } from 'vue';
const categorys = ref({})
async function getCategorys() {
    const res = await services.getCategorys();
    categorys.value = res.data
}
getCategorys()
</script>

<style lang="scss" scoped></style>