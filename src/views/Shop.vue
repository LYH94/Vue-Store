<template>
  <div id="shop">
    <b-container class="mt-4">
      <b-row>
        <b-col cols="3">
          <div id="shop-sidebar">
            <b-nav vertical class="h-100 py-3">
              <b-nav-item @click="listType = '全部'">全部<font-awesome-icon class="ml-2" :icon="['fas', 'fire-alt']"></font-awesome-icon></b-nav-item>
              <b-nav-item @click="listType = '沉香粉'">沉香粉</b-nav-item>
              <b-nav-item @click="listType = '臥香'">臥香</b-nav-item>
              <b-nav-item @click="listType = '佛珠'">佛珠</b-nav-item>
              <b-nav-item @click="listType = '雕刻品'">雕刻品</b-nav-item>
            </b-nav>
          </div>
        </b-col>
        <b-col cols="9">
          <div id="shoplist" class="mt-3">
            <div id="shoplistone">
              <b-container class="w-100 h-100 d-flex flex-column bg-light mt-3">
                <b-row class="h-100">
                  <b-col cols="12" md="6" lg="4" v-for="image in product" :key="image._id">
                    <b-card id="shop" class="h-100 mb-3">
                      <b-card-img :src="image.src"></b-card-img>
                      <b-form-textarea v-if="image.edit"></b-form-textarea>
                      <b-card-text>{{ image.name }}</b-card-text>
                      <b-card-text class="price">$ {{ image.price }}</b-card-text>
                      <!-- <b-card-text>
                        <b-form-spinbutton v-model="image.count" min="1" inline></b-form-spinbutton>
                      </b-card-text> -->
                      <b-card-text>
                      <b-button variant="outline-dark" class="mr-2" @click="productDetail(image._id)">
                        更多資訊
                      </b-button>
                      <b-button variant="outline-dark" @click="addCart(image)">
                        <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
                      </b-button>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div id="go_cart">
      <b-button variant="outline-light" class="cart-btn" v-b-toggle.sidebar-right>
        <font-awesome-icon class="shopping-cart" :icon="['fas', 'shopping-cart']"></font-awesome-icon>
        <span class="badge badge-pill badge-danger nav_badge">{{ cart }}</span>
      </b-button>
      <b-sidebar id="sidebar-right" no-header right shadow>
        <b-container class="h-100 px-3 py-2">
          <b-container class=" h-100 p-0 d-flex flex-column" v-if="items.length > 0">
            <h5>我的購物車</h5>
            <b-row v-for="item in items" :key="item.id">
              <b-col cols="4" class="bg-dark p-0">
                <b-img :src="item.src" width="100"></b-img>
              </b-col>
              <b-col>
                <b-row>
                  <b-col cols="12">{{item.name}}</b-col>
                  <b-col cols="8">{{item.count}}</b-col>
                  <b-col cols="4">{{item.price}}</b-col>
                  <b-col cols="2">
                    <b-button variant="danger" size="sm" @click="del()">
                      <font-awesome-icon :icon="['far', 'trash-alt']"></font-awesome-icon>
                    </b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-btn variant="warning" to="/cart" class="mt-3">去結帳</b-btn>
          </b-container>
          <b-container class="h-100 d-flex justify-content-center align-items-center" v-else>
            <h5>你的購物車是空的<font-awesome-icon class="mr-2" :icon="['fas', 'shopping-cart']"></font-awesome-icon></h5>
          </b-container>
        </b-container>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  data () {
    return {
      image: null,
      description: '',
      images: [],
      listType: '全部'
    }
  },
  computed: {
    items () {
      return this.$store.getters.items
    },
    product () {
      return this.images.filter(i => {
        if (this.listType === '全部') return true
        else return i.type === this.listType
      })
    },
    cart () {
      return this.$store.state.items.length
    }
  },
  methods: {
    productDetail (id) {
      this.$router.push(`/item/${id}`)
    },
    del (index) {
      this.$store.commit('delCart', index)
    },
    addCart (item) {
      // 呼叫 mutations
      this.$store.commit('addCart', item)
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: '已加入購物車'
      })
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/products/')
      .then(res => {
        if (res.data.success) {
          this.images = res.data.result.map(image => {
            image.src = process.env.VUE_APP_API + '/products/file/' + image.file
            image.title = image.description
            image.edit = false
            image.model = image.description
            image.count = 1
            return image
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
/* 購物車 -------------------------- */
  #go_cart {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }

  .cart-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    background: #fff;
  }

  .cart-btn:hover {
    background: rgb(255, 187, 0);
  }

  #go_cart .shopping-cart {
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #414141;
  }

  #go_cart .nav_badge {
    position: absolute;
    font-size: 0.8rem;
    top: 0px;
    right: 0px;
  }

  #shop-sidebar .nav-item a:hover {
    color: #c0392b;
  }
  #shop-sidebar .nav-item a {
    font-size: 1.1rem;
  }

  .price {
    color: #c0392b;
  }

  /* RWD 768 尺寸以下 ------------------------------------- */
  @media (max-width: 767px){
    #go_cart,
    #sidebar-right {
      display: none;
    }
  }

  /* RWD 768px ------------------------------------- */
    @media (min-width: 768px){
    #sidebar-right {
      position: fixed !important;
      right: 20px;
      top: 550px;
      width: 300px;
      height: 300px;
    }
  }
</style>
