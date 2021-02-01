<template>
  <div id="home" class="h-100">
    <!-- 輪播圖 -->
    <b-container fluid class="p-0">
      <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="banner in banners" :key="banner.id" :img-src="banner.img[0]"></b-carousel-slide>
      </b-carousel>
    </b-container>
    <!-- 認識沉香 -->
    <b-container fluid class="bg-img01">
      <b-container id="pic01" class="py-5">
        <h2 class="my-2">認識沉香</h2>
        <b-row class="mb-5">
          <b-col cols="12" lg="6">
            <b-img class="pic01" src="../assets/pic01.jpg" fluid></b-img>
          </b-col>
          <b-col cols="12" lg="6" class="pic01-text" align-self="center">
            <p>當沉香樹木受到外傷或真菌感染刺激後，像是自然界的傷害如雷擊、風折、蟲蛀等，或者是受到人為破壞以後，它在自我修復的過程中分泌出的油脂，會產生結香的效果，三四百年後結到極致。正因沉香是極為稀少的香料資源，取得困難，沉香也被譽為"植物中的鑽石。</p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <!-- 沉香種類 -->
    <b-container class="my-5">
      <h2 class="my-3">沉香種類</h2>
      <b-row>
        <b-col cols="6" class="d-flex flex-column align-items-center">
          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <b-img src="../assets/intro2.png" width="200" height="200"></b-img>
          </div>
            <b-row class="mt-3">
              <b-col>
                <b-card no-body class="homecard">
                  <b-tabs pills card  class="d-flex flex-column align-items-center">
                    <b-tab title="星洲" active>
                      <b-card-text>
                        星洲指的是新加坡，在此地集散的沉香就可稱為星洲沉香。 星洲系沉香特色是味烈濃醇，帶有些許涼味。
                      </b-card-text>
                    </b-tab>
                    <b-tab title="惠安">
                      <b-card-text>
                        越南、中南半島附近的國家所產之沉香，皆可稱為惠安沉香。 惠安系沉香通常香味普遍偏甜，有花果香的氣息。
                      </b-card-text>
                      </b-tab>
                  </b-tabs>
                </b-card>
              </b-col>
            </b-row>
        </b-col>
        <b-col cols="6" class="d-flex flex-column align-items-center">
          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <b-img src="../assets/intro3.png" width="200" height="200"></b-img>
          </div>
            <b-row class="mt-3">
              <b-col>
                <b-card no-body class="homecard">
                  <b-tabs pills card  class="d-flex flex-column align-items-center">
                    <b-tab title="新山" active>
                      <b-card-text>
                        澳洲、印尼、斐濟、東加一帶和非洲出產的檀香，皆可稱為新山檀香。 新山系檀香的特色是帶有花果香，味道較清淡。
                      </b-card-text>
                    </b-tab>
                    <b-tab title="老山">
                      <b-card-text>
                        產於印度境内的檀香稱為老山檀香。 老山味道較新山醇厚，香味中略帶甜味，持久耐聞。
                      </b-card-text>
                      </b-tab>
                  </b-tabs>
              </b-card>
              </b-col>
            </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!-- swiper -->
    <b-container class="mb-4">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide  v-for="info in infos" :key="info.id">
          <router-link to="/about">
            <b-card border-variant="light" img-top="img-top" class="wood shadow m-2" :img-src="info.img[0]">
              <b-card-text>{{ info.name }}</b-card-text>
            </b-card>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </b-container>
    <b-container>
    </b-container>
    <!-- 5張照片 -->
    <div class="d-flex">
      <div class="box box1">
        <div class="box-hover box-text">
          <div class="row-text">純</div>
          <div class="row1-text-hover"></div>
        </div>
      </div>
      <div class="box box2">
        <div class="box-hover box-text">
          <div class="row-text">天</div>
          <div class="row2-text-hover"></div>
        </div>
      </div>
      <div class="box box3">
        <div class="box-hover box-text">
          <div class="row-text">然</div>
          <div class="row3-text-hover"></div>
        </div>
      </div>
      <div class="box box4">
        <div class="box-hover box-text">
          <div class="row-text">原</div>
          <div class="row4-text-hover"></div>
        </div>
      </div>
      <div class="box box5">
        <div class="box-hover box-text">
          <div class="row-text">料</div>
          <div class="row5-text-hover"></div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <b-container fluid class="p-0">
      <footer class="py-5 bg-light w-100 bg-dark text-white">
        <b-container>
          <b-row align-h="between">
            <b-col cols="12" lg="4">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']"></font-awesome-icon> 243 新北市泰山區貴子里致遠新村55之1號
            </b-col>
            <b-col cols="12" lg="3">
              <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon> 0999-888-168
            </b-col>
            <b-col cols="12" lg="2" class="text-lg-right">
              <font-awesome-icon class="mr-2" :icon="['fab', 'facebook']"></font-awesome-icon>
              <font-awesome-icon class="mr-2" :icon="['fab', 'instagram']"></font-awesome-icon>
              <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
            </b-col>
          </b-row>
          <b-row align-h="between">
            <b-col cols="12" lg="4">所有圖片皆來自於網路僅為練習用</b-col>
            <b-col cols="12" lg="4" class="text-lg-right">Created by Lee Y.H</b-col>
          </b-row>
        </b-container>
      </footer>
    </b-container>
    <!-- 回最上面 -->
    <div id="go_top_page">
      <a href="#">
        <font-awesome-icon class="shopping-cart" :icon="['fas', 'chevron-up']"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Home',
  data () {
    return {
      slide: 0,
      sliding: null,
      abouts: [
        {
          name: '關於沉香',
          text: '當沉香樹木受到外傷或真菌感染刺激後，像是自然界的傷害如雷擊、風折、蟲蛀等，或者是受到人為破壞以後，它在自我修復的過程中分泌出的油脂，會產生結香的效果，三四百年後結到極致。正因沉香是極為稀少的香料資源，取得困難，沉香也被譽為"植物中的鑽石。"',
          img: './assets/productimg/about01'
        }
      ],
      banners: [
        {
          name: '棋楠',
          intro: '是沉香中香氣最優雅細緻且氣韻最綿密悠長的，隨著溫度與時間的變化，香氣會不斷改變。低溫初段時，微微的花香 甜味帶一點微微的清涼感，還有一股奇楠特有的味道；中段溫度略為升高時，甜香帶果實香更明顯，濃而不膩，慢慢出現甜杏仁的香氣。尾段甜奶、杏仁味更加明顯，香氣力道衰而不滅，香韻持續綿密，氣韻悠揚，回味無窮。',
          img: [
            './banner/b1.jpg'
          ]
        },
        {
          name: '紅土',
          intro: '紅土亦是惠安系的沉香，有著一樣優雅迷人的香氣，而因為又經過在地表或土裡長久時間的孕育與純化，味道會更加的渾厚，底藴更內斂，氣味更飽和且持久耐高溫，常用在高級臥香上，更是品香與收藏的上選。',
          img: [
            './banner/b2.jpg'
          ]
        },
        {
          name: '惠安',
          intro: '有花香、蜜香、果香甜香。好的惠安香更有著一股清新的涼氣，跟星洲最大的不同在於雅緻之處，一樣是甜，惠安系的甜是很優雅細緻的，久聞不膩。',
          img: [
            './banner/b3.jpg'
          ]
        },
        {
          name: '加里曼丹',
          intro: '氣味濃郁且活潑，其中帶著花香。初香時散發加里曼丹獨特香味而帶有花香，慢慢進入本香時香醇的氣味慢慢散發出來，一直到尾香時轉為香甜，花香慢慢消失。',
          img: [
            './banner/b4.jpg'
          ]
        },
        {
          name: '棋楠',
          intro: '是沉香中香氣最優雅細緻且氣韻最綿密悠長的，隨著溫度與時間的變化，香氣會不斷改變。低溫初段時，微微的花香 甜味帶一點微微的清涼感，還有一股奇楠特有的味道；中段溫度略為升高時，甜香帶果實香更明顯，濃而不膩，慢慢出現甜杏仁的香氣。尾段甜奶、杏仁味更加明顯，香氣力道衰而不滅，香韻持續綿密，氣韻悠揚，回味無窮。',
          img: [
            './banner/b5.jpg'
          ]
        }
      ],
      infos: [
        {
          name: '棋楠',
          intro: '是沉香中香氣最優雅細緻且氣韻最綿密悠長的，隨著溫度與時間的變化，香氣會不斷改變。低溫初段時，微微的花香 甜味帶一點微微的清涼感，還有一股奇楠特有的味道；中段溫度略為升高時，甜香帶果實香更明顯，濃而不膩，慢慢出現甜杏仁的香氣。尾段甜奶、杏仁味更加明顯，香氣力道衰而不滅，香韻持續綿密，氣韻悠揚，回味無窮。',
          img: [
            './wood/wood1.jpg'
          ]
        },
        {
          name: '紅土',
          intro: '紅土亦是惠安系的沉香，有著一樣優雅迷人的香氣，而因為又經過在地表或土裡長久時間的孕育與純化，味道會更加的渾厚，底藴更內斂，氣味更飽和且持久耐高溫，常用在高級臥香上，更是品香與收藏的上選。',
          img: [
            './wood/wood2.jpg'
          ]
        },
        {
          name: '惠安',
          intro: '有花香、蜜香、果香甜香。好的惠安香更有著一股清新的涼氣，跟星洲最大的不同在於雅緻之處，一樣是甜，惠安系的甜是很優雅細緻的，久聞不膩。',
          img: [
            './wood/wood3.jpg'
          ]
        },
        {
          name: '加里曼丹',
          intro: '氣味濃郁且活潑，其中帶著花香。初香時散發加里曼丹獨特香味而帶有花香，慢慢進入本香時香醇的氣味慢慢散發出來，一直到尾香時轉為香甜，花香慢慢消失。',
          img: [
            './wood/wood4.jpg'
          ]
        }
      ],
      swiperOption: {
        loop: true,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style lang="scss">
  body {
    overflow-x: hidden;
  }
  // 輪播圖 ------------------------------------------------------------
  #carousel {
    width: 100vw;
    height: 65vh;
  }
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // 認識沉香 ----------------------------------------------------------
  .pic01 {
    border-radius: 15px;
  }

  .pic01-text {
    line-height: 2rem;
  }

  .bg-img01 {
    width: 100%;
    background-image: url(../assets/homepic01.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  // 沉香種類 ---------------------------------------------------------
  .homecard .card-header {
    background: #fafafa;
    border-bottom: none;
  }

  .wood {
    font-size: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  .wood .card-text {
    color: black;
    text-decoration: none;
  }

  .wood:hover::before {
    content: '了解更多';
    color: white;
    text-align: center;
    line-height: 15rem;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(73,70,62,.5);
    transition: 1s;
  }

  .swiper a {
    text-decoration: none;
  }

  // 5 張照片 ----------------------------------------------------------
  .box {
    width: 150px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .box1 {
    background: url(../assets/row0.jpg) no-repeat center/cover;
  }
  .box2 {
    background: url(../assets/row1.jpg) no-repeat center/cover;
  }
  .box3 {
    background: url(../assets/row2.jpg) no-repeat center/cover;
  }
  .box4 {
    background: url(../assets/row3.jpg) no-repeat center/cover;
  }
  .box5 {
    background: url(../assets/row4.jpg) no-repeat center/cover;
  }

  .box-text {
    width: 100%;
    height: 20%;
    text-align: center;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: white;
    left: 0;
    transition: 0.5s;
    overflow: hidden;
  }

  .box-hover:hover {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.452);
  }

  // 純天然原料
  .row-text {
    width: 100%;
    font-size: 2rem;
  }

  .box:hover .row1-text-hover::before,
  .box:hover .row2-text-hover::before,
  .box:hover .row3-text-hover::before,
  .box:hover .row4-text-hover::before,
  .box:hover .row5-text-hover::before {
    bottom: 0;
  }

  .row1-text-hover::before {
    content: '聞香_心靜';
    font-size: 0.5rem;
    position: relative;
    border-top: 1px solid #fff;
    bottom: -100px;
    transition: 1s;
  }
  .row2-text-hover::before {
    content: '品質_保證';
    font-size: 0.5rem;
    position: relative;
    border-top: 1px solid #fff;
    bottom: -100px;
    transition: 1s;
  }
  .row3-text-hover::before {
    content: '用心_製造';
    font-size: 0.5rem;
    position: relative;
    border-top: 1px solid #fff;
    bottom: -100px;
    transition: 1s;
  }
  .row4-text-hover::before {
    content: '天然_原木';
    font-size: 0.5rem;
    position: relative;
    border-top: 1px solid #fff;
    bottom: -100px;
    transition: 1s;
  }
  .row5-text-hover::before {
    content: '安心_使用';
    font-size: 0.5rem;
    position: relative;
    border-top: 1px solid #fff;
    bottom: -100px;
    transition: 1s;
  }

// 回最上面 ------------------------------------------------
  #go_top_page {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    box-shadow: inset 0 0 2px #ffc107;
  }

  #go_top_page a {
    display: block;
    font-size: 2rem;
    text-align: center;
    line-height: 50px;
    color: #ffc107;
  }

  // RWD 576px -------------------------------------
  @media (max-width: 575.98px){
    p.about-text {
      font-size: 0.5rem;
    }

    .row-text {
      width: 100%;
      font-size: 1.5rem;
    }
  }

  // RWD 768px -------------------------------------
  @media (min-width: 768px){
    .box {
      width: 210px;
      height: 345px;
    }
  }

  // RWD 992px -------------------------------------
  @media (min-width: 992px){
    .box {
      width: 420px;
      height: 690px;
    }

    .row-text {
      width: 100%;
      font-size: 2.5rem;
    }

    .row1-text-hover::before,
    .row2-text-hover::before,
    .row3-text-hover::before,
    .row4-text-hover::before,
    .row5-text-hover::before {
      font-size: 1.2rem;
    }
  }
</style>
