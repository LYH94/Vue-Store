<template>
  <div id="product">
    <div id="productlist" class="mt-3 p-0">
      <b-row>
        <b-col cols="auto" class="mr-auto">
          <h3>商品上架管理</h3>
        </b-col>
        <b-col cols="auto">
          <b-button v-b-modal.productModal variant="outline-dark">
            <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
          </b-button>
          <b-modal
            id="productModal"
            ref="modal"
            title="商品上架管理"
            ok-only
            hide-footer
            no-close-on-backdrop
          >
            <b-form class="mt-0" @submit.prevent="onSubmit">
              <b-form-group id="input-group-1" label="產品名稱" label-for="input-1" invalid-feedback="格式不符">
                <b-form-input id="input-1" v-model="name" type="text" placeholder="請輸入產品名稱"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="產品價格" label-for="input-2" invalid-feedback="格式不符">
                <b-form-input id="input-2" v-model="price" type="text" placeholder="請輸入產品價格"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="產品數量" label-for="input-3" invalid-feedback="格式不符">
                <b-form-input id="input-3" v-model="quantity" type="text" placeholder="請輸入產品數量"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-4" label="產品類別" label-for="input-3" invalid-feedback="格式不符">
                <b-form-input id="input-4" v-model="type" type="text" placeholder="請輸入產品類別"></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-5" label="圖片說明" label-for="input-4" :state="descState" description="最多200個字" invalid-feedback="格式不符">
                <b-form-textarea id="input-5" v-model="description" type="text" placeholder="請輸入相片說明" :state="descState"></b-form-textarea>
              </b-form-group>
              <img-inputer class="mx-auto" v-model="image" placeholder="請選擇圖片" bottom-text="點擊或拖曳更換圖片" :max-size="1024" exceedSizeText="檔案大小不能超過" accept="image/*"></img-inputer>
              <br />
              <br />
              <b-btn type="submit">送出</b-btn>
            </b-form>
          </b-modal>
        </b-col>
      </b-row>
      <b-row>
        <b-nav>
          <b-nav-item @click="listType = '全部'">全部</b-nav-item>
          <b-nav-item @click="listType = '沉香粉'">沉香粉</b-nav-item>
          <b-nav-item @click="listType = '臥香'">臥香</b-nav-item>
          <b-nav-item @click="listType = '佛珠'">佛珠</b-nav-item>
          <b-nav-item @click="listType = '雕刻品'">雕刻品</b-nav-item>
        </b-nav>
      </b-row>
      <b-row>
        <b-col>
          <table class="table-responsive-sm table mt-4 table-hover border">
            <thead class="thead-dark">
              <tr>
                <td width="10%">商品</td>
                <td width="8%">類別</td>
                <td width="10%">名稱</td>
                <td width="10%">價格</td>
                <td width="5%">數量</td>
                <td width="30%">說明</td>
                <td width="10%">操作</td>
              </tr>
            </thead>
            <tbody>
              <!-- 跑過濾過後的 product -->
              <tr v-for="(image, idx) in product" :key="image._id">
                <td><b-img :src="image.src" width="150%"></b-img></td>
                <td>
                  <b-form-input v-if="image.edit" v-model="image.modelType"></b-form-input>
                  <p v-else style="white-space: pre-wrap">{{ image.modelType}}</p>
                </td>
                <td>
                  <b-form-input v-if="image.edit" v-model="image.modelName"></b-form-input>
                  <p v-else style="white-space: pre-wrap">{{ image.modelName }}</p>
                </td>
                <td>
                  <b-form-input v-if="image.edit" v-model="image.modelPrice"></b-form-input>
                  <p v-else style="white-space: pre-wrap">{{ image.modelPrice }}</p>
                </td>
                <td>
                  <b-form-input v-if="image.edit" v-model="image.modelQuantity"></b-form-input>
                  <p v-else style="white-space: pre-wrap">{{ image.modelQuantity }}</p>
                </td>
                <td>
                  <b-form-textarea v-if="image.edit" v-model="image.model"></b-form-textarea>
                  <p v-else style="white-space: pre-wrap">{{ image.title }}</p>
                </td>
                <td>
                  <b-button class="mr-1" v-if="image.edit" @click="cancel(image)">
                    <font-awesome-icon :icon="['fas', 'undo']"></font-awesome-icon>
                  </b-button>
                  <b-button variant="success" v-if="image.edit" @click="save(image)">
                    <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                  </b-button>
                  <b-button class="mr-1" v-if="!image.edit" @click="edit(image)">
                    <font-awesome-icon :icon="['far', 'edit']"></font-awesome-icon>
                  </b-button>
                  <b-button variant="danger" v-if="!image.edit" @click="del(image, idx)">
                    <font-awesome-icon :icon="['far', 'trash-alt']"></font-awesome-icon>
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      image: null,
      description: '',
      products: [],
      name: '',
      price: '',
      quantity: '',
      type: '',
      listType: '全部'
    }
  },
  computed: {
    descState () {
      if (this.description.length === 0) {
        return null
      } else if (this.description.length > 200) {
        return false
      } else {
        return true
      }
    },
    product () {
      return this.products.filter(i => {
        if (this.listType === '全部') return true
        else return i.type === this.listType
      })
    }
  },
  methods: {
    onSubmit () {
      console.log(this.image)
      if (this.image.size > 1024 * 1024) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '圖片太大'
        })
      } else if (!this.image.type.includes('image')) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '檔案格式錯誤'
        })
      } else {
        const fd = new FormData()
        fd.append('image', this.image)
        fd.append('type', this.type)
        fd.append('name', this.name)
        fd.append('price', this.price)
        fd.append('quantity', this.quantity)
        fd.append('description', this.description)

        this.axios.post(process.env.VUE_APP_API + '/products/', fd)
          .then(res => {
            console.log(res)
            if (res.data.success) {
              // 將新增的圖片塞進相簿陣列
              res.data.result.src = process.env.VUE_APP_API + '/products/file/' + res.data.result.file
              res.data.result.title = res.data.result.description
              res.data.result.edit = false
              res.data.result.model = res.data.result.description
              res.data.result.modelName = res.data.result.name
              res.data.result.modelPrice = res.data.result.price
              res.data.result.modelQuantity = res.data.result.quantity
              res.data.result.modelType = res.data.result.type
              delete res.data.result.file
              delete res.data.result.description
              this.products.push(res.data.result)
              // 送出後清空表單
              this.type = ''
              this.name = ''
              this.price = ''
              this.quantity = ''
              this.description = ''
              this.image = null
              this.$swal({
                icon: 'success',
                title: '成功新增'
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
    },
    cancel (image) {
      image.edit = false
      image.model = image.title
    },
    save (image) {
      this.axios.patch(process.env.VUE_APP_API + '/products/' + image._id, {
        description: image.model,
        type: image.modelType,
        name: image.modelName,
        price: image.modelPrice,
        quantity: image.modelQuantity
      })
        .then(res => {
          if (res.data.success) {
            image.edit = false
            image.title = image.model
            image.modelName = image.name
            image.modelType = image.type
            image.modelPrice = image.price
            image.modelQuantity = image.quantity
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
    },
    edit (image) {
      image.edit = true
      image.model = image.title
      image.modelName = image.name
      image.modelPrice = image.price
      image.modelQuantity = image.quantity
    },
    del (image, idx) {
      this.axios.delete(process.env.VUE_APP_API + '/products/' + image._id)
        .then(res => {
          if (res.data.success) {
            this.products.splice(idx, 1)
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
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/products/')
      .then(res => {
        if (res.data.success) {
          this.products = res.data.result.map(image => {
            image.src = process.env.VUE_APP_API + '/products/file/' + image.file
            image.title = image.description
            image.edit = false
            image.modelName = image.name
            image.modelType = image.type
            image.modelPrice = image.price
            image.modelQuantity = image.quantity

            delete image.file
            delete image.description
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
  #das-sidebar .nav-item a:hover,
  #productlist .nav-item a:hover {
    color: #c0392b;
  }
</style>
