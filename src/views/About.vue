<template>
  <b-container fluid id="about" class="p-0 h-100">
    <div class="about-svg h-100" v-if="isShow">
      <div class="svg-hover h-100 d-flex flex-column justify-content-center align-items-center">
        <b-img src="../assets/about_animated.svg" width="400" @click="toggleAbout"></b-img>
      </div>
    </div>
    <div v-else>
      <b-container class="mt-5">
        <b-img src="../assets/bg.jpg" class="mb-2" fluid></b-img>
      </b-container>
      <b-container class="p-0 my-5">
        <b-row>
          <b-col>
            <div data-aos="fade-up" data-aos-duration="1500">
              <b-card
                overlay
                img-src="../assets/about1.jpg"
                img-alt="調香原料"
                text-variant="white"
                border-variant="light"
                title="調香原料"
                class="w-100"
              >
                <b-card-text class="aboutimg">
                  調和各種原料混合，增加了味道的深度。
                </b-card-text>
              </b-card>
            </div>
          </b-col>
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <p>使用天然的原料來調和香味</p>
            <b-button v-b-toggle.about-1>了解更多</b-button>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-collapse id="about-1" class="mt-2">
          <b-card>
            <b-container>
              <h3>調香原料</h3>
              <b-container id="flavor">
                <b-row>
                  <b-col cols="6" lg="4" v-for="flavor in flavors" :key="flavor.id">
                    <b-card border-variant="light" :img-src="flavor.img[0]">
                      <b-card-text >
                        {{ flavor.name }}
                      </b-card-text>
                      <b-card-text >
                        {{ flavor.intro }}
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </b-container>
          </b-card>
        </b-collapse>
      </b-container>
      <b-container>
        <b-row class="p-0">
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <p>沉香原料介紹</p>
            <b-button v-b-toggle.about-2>了解更多</b-button>
          </b-col>
          <b-col>
            <div data-aos="fade-up" data-aos-duration="1500">
              <b-card
              overlay
              img-src="../assets/about2.jpg"
              img-alt="沉香原料"
              title="沉香原料"
              text-variant="dark"
              border-variant="light"
              class="w-100"
              >
            </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-collapse id="about-2" class="mt-2">
          <b-card>
            <b-container>
              <h3>沉香原料</h3>
              <b-container id="powder">
                <b-row>
                  <b-col cols="6" lg="3" v-for="powder in powders" :key="powder.id">
                    <b-card border-variant="light" :img-src="powder.img[0]">
                      <b-card-text >
                        {{ powder.name }}
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </b-container>
          </b-card>
        </b-collapse>
      </b-container>
      <b-container class="mt-5">
        <b-row>
          <b-col>
            <div data-aos="fade-up" data-aos-duration="1500">
              <b-card
                overlay
                img-src="../assets/about3.jpg"
                img-alt="沉香辨別"
                text-variant="white"
                border-variant="light"
                title="沉香辨別"
                class="w-100"
              >
              </b-card>
            </div>
          </b-col>
          <b-col class="d-flex flex-column justify-content-center align-items-center">
            <p>將沉香加熱燻烤或點燃聞其香味。好的沉香首先分發的是油脂香味，必定不會立即呈現焦味。</p>
            <b-button v-b-toggle.about-3>了解更多</b-button>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-collapse id="about-3" class="mt-2">
          <b-card>
            <b-container>
              <h3>真偽辨別</h3>
              <b-row>
                <b-col cols="6">
                  <p>自然</p>
                  <p>自然沉香與人造沉香在紋路與色澤等方面有明顯區別。自然構成的沉香，需終年累月。紋路，即油脂線呈現不勻，色澤間也存在一定的差異</p>
                </b-col>
                <b-col cols="6">
                  <p>化學</p>
                  <p>人造構成的沉香，製造的十分皆有統一的規範，其油脂腺散布通常黑而含糊。</p>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-collapse>
      </b-container>
      <b-container class="p-0 bg-white" fluid>
            <b-container class="mt-5">
        <b-row>
          <b-col cols="12" lg="6">
            <h2>聯絡我們</h2>
            <b-form @submit.prevent="sendEmail">
              <b-form-group label="姓名">
                <b-form-input type="text" required="required" v-model="form.name" placeholder="請輸入名字"></b-form-input>
              </b-form-group>
              <b-form-group label="電話">
                <b-form-input required="required" v-model="form.phone" placeholder="請輸入電話"></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="電子信箱"
                label-for="input-1"
                v-model="form.name"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="請輸入電子信箱"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group class="mb-0" label="備註" v-model="form.note">
                <b-form-textarea placeholder="我們會盡快聯絡你"></b-form-textarea>
              </b-form-group>
              <b-form-group>
                <b-button class="mt-2 btn-md" type="submit">送出</b-button>
              </b-form-group>
            </b-form>
          </b-col>
          <b-col align-self="center" cols="12" lg="6">
            <b-embed type="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.814597305804!2d121.4195156!3d25.0441293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1611034324609!5m2!1szh-TW!2stw"></b-embed>
          </b-col>
        </b-row>
      </b-container>
      </b-container>
      <b-container class="p-0" fluid>
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
      <div id="go_top_page">
        <a href="#">
          <font-awesome-icon class="shopping-cart" :icon="['fas', 'chevron-up']"></font-awesome-icon>
        </a>
      </div>
    </div>
  </b-container>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  data () {
    return {
      isShow: true,
      flavors: [
        {
          name: '白壇',
          intro: '原產地為印度，它有獨特的安撫作用可以使人清心、凝神、排除雜念，是修生養性的輔助工具。',
          img: [
            './about/flavor1.jpg'
          ]
        },
        {
          name: '奇楠',
          intro: '最高質量的沉香，僅在越南的某些區域內生產。',
          img: [
            './about/flavor2.jpg'
          ]
        },
        {
          name: '沉香',
          intro: '植物流出的樹脂與木質結合在一起的融合物。',
          img: [
            './about/flavor3.jpg'
          ]
        },
        {
          name: '龍涎香',
          intro: '從抹香鯨消化系統所產生。龍涎香有其獨特的甘甜土質香味。',
          img: [
            './about/flavor4.jpg'
          ]
        },
        {
          name: '肉桂',
          intro: '是最早被人類使用的香料之一，桂皮的氣味芳香。',
          img: [
            './about/flavor5.jpg'
          ]
        }
      ],
      powders: [
        {
          name: '老山檀香',
          img: [
            './about/powder1.png'
          ]
        },
        {
          name: '新山檀香',
          img: [
            './about/powder2.png'
          ]
        },
        {
          name: '星洲沉香',
          img: [
            './about/powder3.png'
          ]
        },
        {
          name: '惠安沉香',
          img: [
            './about/powder4.png'
          ]
        }
      ],
      form: [
        {
          name: '',
          phone: '',
          email: '',
          note: ''
        }
      ]
    }
  },
  methods: {
    toggleAbout () {
      this.isShow = !this.isShow
    },
    sendEmail () {
      const templateParams = {
        userName: this.form.name,
        userPhone: this.form.phone,
        userEmil: this.form.email,
        content: this.form.note
      }
      emailjs.send('gmail', 'template_5ejwnft', templateParams, 'user_1HFWK3ADiB3ud0ZgKgI2I')
        .then(() => {
          this.$swal({
            icon: 'success',
            title: '已成功送出，請留意您的信箱',
            timer: 2000,
            timerProgressBar: true
          })
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  }
}
</script>

<style lang="scss">
  #about-1 .card,
  #about-2 .card,
  #about-3 .card {
    background: #fafafa;
    border: none;
  }

  .card {
    border: none;
  }

  .about-svg {
    background: url(../assets/svgbg.jpg) no-repeat center/cover;
    height: 800px;
  }

  h3 {
    display: inline-block;
    border-bottom: 5px solid#bbbbbb;
  }

  #flavor .card-text,
  #powder .card-text {
    font-size: 0.9rem;
  }

  // RWD 576
  @media (max-width: 575.98px) {
    p {
      font-size: 0.9rem;
    }
  }
  // RWD 992
  @media (min-width: 992px){
    .aboutimg {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -90%);
      z-index: 1;
      width: 100%;
      padding: 10px 0px;
      font-size: 1.2rem;
      text-align: center;
      background: linear-gradient(
        270deg,
        transparent,
        rgb(0, 0, 0),
        transparent
      ) !important;
    }
  }
</style>
