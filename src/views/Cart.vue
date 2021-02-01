<template>
  <div class="my-5" id="cart">
    <b-container v-if="items.length > 0">
      <h4>購物車</h4>
      <form-wizard title="" subtitle="" step-size="sm" color="#736F66" back-button-text="上一頁" next-button-text="下一頁" finish-button-text="完成" @on-complete="onComplete()" >
        <tab-content :title="steps[0]">
          <b-table class="tb-left mt-5" :items="items" :fields="fields" stacked="sm" outlined responsive striped hover>
            <template v-slot:cell(name)="data">{{data.item.name}}</template>
            <template v-slot:cell(src)="data">
              <b-img :src="data.item.src" width="130" height="100"></b-img>
            </template>
            <template v-slot:cell(count)="data">
              <b-form-spinbutton id="sb-inline" inline="inline" v-model="data.item.count" @change="addCart(data.item)"></b-form-spinbutton>
            </template>
            <template v-slot:cell(total)="data">{{data.item.count * data.item.price}}</template>
            <template v-slot:cell(action)="data">
              <b-button variant="danger" @click="del(data.index)">
                <font-awesome-icon :icon="['far', 'trash-alt']"></font-awesome-icon>
              </b-button>
            </template>
          </b-table>
        </tab-content>
        <tab-content :title="steps[1]">
          <b-container class="my-5">
            <b-row>
              <b-col class="mb-4 order-lg-2" cols="12" lg="4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span>你的購物車</span>
                  <span class="badge badge-secondary badge-pill">{{ totalcount }}</span>
                </h4>
                <b-list-group class="mb-3" v-model="checkouts">
                  <b-list-group-item v-for="(item, index) in items" :key="index">
                    <div>
                      <b-row>
                        <b-col cols="auto" class="mr-auto">{{ item.name }}</b-col>
                        <b-col cols="2">{{ item.count }}</b-col>
                        <b-col cols="4" class="pl-4">$ {{ item.count * item.price }}</b-col>
                      </b-row>
                    </div>
                  </b-list-group-item>
                  <b-list-group-item>
                    <b-row>
                      <b-col cols="auto" class="mr-auto">總計</b-col>
                      <b-col cols="2">{{ totalcount }}</b-col>
                      <b-col cols="4" class="text-danger pl-4">$ {{ totalprice }}</b-col>
                    </b-row>
                  </b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col class="order-lg-1" cols="12" lg="8">
                <h4 class="mb-3">聯絡資訊</h4>
                  <b-form-group
                    id="form-1"
                    label="姓名"
                    label-for="form-name"
                    label-cols-sm="2"
                    invalid-feedback="格式不符"
                    :state="state('name')"
                  >
                    <b-form-input id="form-name" v-model="payName" :state="state('name')" placeholder="請輸入名字" trim></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="form-2"
                    label="電話"
                    label-for="form-phone"
                    label-cols-sm="2"
                    invalid-feedback="電話號碼最少 9 個字，最多 10 個字"
                    :state="state('phone')"
                  >
                    <b-form-input id="form-phone" v-model="phone" :state="state('phone')" placeholder="請輸入電話" trim></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="form-3"
                    label="電子信箱"
                    label-for="form-email"
                    label-cols-sm="2"
                    invalid-feedback="格式不符"
                    :state="state('email')"
                  >
                    <b-form-input type="email" id="form-email" v-model="email" :state="state('email')" placeholder="請輸入電子信箱" trim></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="form-4"
                    label="地址"
                    label-for="form-address"
                    label-cols-sm="2"
                    invalid-feedback="格式不符"
                    :state="state('address')"
                  >
                    <b-form-input id="form-address" v-model="address" :state="state('address')" placeholder="請輸入地址" trim></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="form-5"
                    label="備註"
                    label-for="form-note"
                    label-cols-sm="2"
                  >
                    <b-form-input id="form-note" v-model="note" placeholder="備註" trim></b-form-input>
                  </b-form-group>
              </b-col>
            </b-row>
          </b-container>
        </tab-content>
      </form-wizard>
    </b-container>
    <b-container class="my-5 d-flex justify-content-center" v-else>
      <div class="no-items">
        <h1><font-awesome-icon class="mr-2" :icon="['fas', 'shopping-cart']"></font-awesome-icon> 你的購物車是空的</h1>
          <router-link to="/shop"><p><font-awesome-icon class="mr-2" :icon="['fas', 'shopping-bag']"></font-awesome-icon>快去逛逛</p></router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      payName: '',
      phone: '',
      email: '',
      address: '',
      note: '',
      steps: ['確認商品', '完成訂單'],
      fields: [
        {
          key: 'src',
          label: '商品'
        },
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'count',
          label: '數量'
        },
        {
          key: 'total',
          label: '總計'
        },
        {
          key: 'action',
          label: '操作'
        }
      ]
    }
  },
  computed: {
    items () {
      return this.$store.getters.items
    },
    totalcount () {
      let count = 0
      for (const item of this.items) {
        count += item.count
      }
      return count
    },
    totalprice () {
      let price = 0
      for (const item of this.items) {
        price += item.count * item.price
      }
      return price
    },
    user () {
      return this.$store.state.user
    },
    checkouts () {
      return this.$store.getters.items
    }
  },
  methods: {
    del (index) {
      this.$store.commit('delCart', index)
    },
    state (type) {
      if (type === 'name') {
        return !(this.payName.length < 2)
      } else if (type === 'phone') {
        return !(this.phone.length < 9 || this.phone.length > 10)
      } else if (type === 'email') {
        return this.email.includes('@')
      } else if (type === 'address') {
        return !(this.address.length < 1)
      }
    },
    onComplete () {
      if (this.user.id.length === 0) {
        this.$swal({
          icon: 'warning',
          title: '尚未登入喔',
          timer: 1000,
          timerProgressBar: true
        }).then(() => {
          this.$router.push('/login')
        })
      } else {
        this.axios.post(process.env.VUE_APP_API + '/orders/', {
          payName: this.payName,
          phone: this.phone,
          email: this.email,
          address: this.address,
          note: this.note,
          checkouts: this.checkouts
        })
          .then(res => {
            this.orders.push(res.data.result)
          })
          .catch(error => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: error.response.data.message
            })
          })
        this.$swal({
          icon: 'success',
          title: '你的訂單已完成',
          timer: 2000,
          timerProgressBar: true
        }).then(() => {
          this.$store.state.items.length = null
        })
      }
    }
  }
}
</script>
<style>
@media (max-width: 575.98px) {
  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::before {
      content: attr(data-label);
      width: 40%;
      float: left;
      text-align: right;
      overflow-wrap: break-word;
      font-weight: bold;
      font-style: normal;
      padding: 0 calc(1rem / 2) 0 0;
      margin: 0;
      text-align: left;
  }
}

.no-items {
  margin-top: 200px;
}

.no-items p {
  color: rgb(238, 181, 11);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 800;
}

.no-items a:hover {
  color: #000;
}
</style>
