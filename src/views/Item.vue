<template>
  <div id="item" class="h-100">
    <div class="text-center">
      <b-img src="../assets/itempic.jpg" fluid></b-img>
    </div>
    <b-container fluid class="item-bg">
      <b-container>
        <h2 class="item-title">產品介紹</h2>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="product[0].src" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6" align-self="center">
                <b-card-body>
                  <b-card-text>
                    <h6>{{ product[0].type }}</h6>
                    <h2>{{ product[0].name }}</h2>
                    <h6>{{ product[0].description }}</h6>
                    <h6 class="text-danger">$ {{ product[0].price }}</h6>
                    <b-button class="back-btn" to="/shop" pill>回購物頁</b-button>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
      </b-container>
      <b-container>
        <h2 class="item-title">訂購須知</h2>
        <b-row align-h="center" class="py-3" v-for="(item, index) in notice" :key="index">
          <b-col cols="1">
            <font-awesome-icon :icon="item.icon" size="4x"></font-awesome-icon>
          </b-col>
          <b-col cols="7" class="ml-5">
            <h5>{{item.text}}</h5>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      image: null,
      products: [],
      product: [],
      notice: [
        {
          icon: ['far', 'calendar-check'],
          text: '您收到的每一盒香品都會附上試用包，收到商品後7日內為鑑賞期，若商品不符合您的需求需要退貨，請勿拆封並保留商品的原包裝'
        },
        {
          icon: ['fas', 'truck'],
          text: '台灣地區宅配到府運費為NT 85元，超商取貨(店到店)運費為NT 65元，購物滿NT 2,000元免運費'
        },
        {
          icon: ['fas', 'plane-departure'],
          text: '若您是台灣地區以外的顧客或台灣離島顧客，請來電與我們連絡，我們會針對海外的運費另外報價'
        },
        {
          icon: ['fas', 'receipt'],
          text: '我們提供二聯式發票，若您有三聯式發票需求請於結帳頁面備註欄註明，您的發票將於七日鑑賞期後寄出'
        }
      ]
    }
  },
  computed: {
    items () {
      return this.$store.getters.items
    },
    id () {
      return this.$route.params.id
    },
    cart () {
      return this.$store.state.items.length
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/products/')
      .then(res => {
        if (res.data.success) {
          this.products = res.data.result.map(image => {
            image.src = process.env.VUE_APP_API + '/products/file/' + image.file
            image.title = image.description
            image.edit = false
            image.model = image.description
            return image
          })
          this.product = this.products.filter(item => {
            return item._id === this.$route.params.id
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: res.data.message
          })
        }
      })
      .catch(err => {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: err.response.data.message
        })
      })
  }
}
</script>

<style>
  .item-title {
    padding: 5px;
    margin-top: 1.5rem;
    display: inline-block;
    border-top: 3px solid rgb(219, 166, 19);
    border-bottom: 3px solid rgb(219, 166, 19);
  }

  .item-bg {
    background: url(../assets/bg-item.jpg) no-repeat center/cover;
  }

  .item-box {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .img-box {
    width: 50%;
    height: 100%;
  }

  .back-btn {
    width: 100px;
    background: transparent !important;
  }

  .back-btn:hover {
    color: #ffffff !important;
    background-color: #e0a800 !important;
    border-color: #d39e00 !important;
  }
</style>
