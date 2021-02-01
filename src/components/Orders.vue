<template>
  <div id="order">
    <div id="orderlist" class="mt-3 p-0">
      <b-row>
        <b-col>
          <h3 class="mb-4">訂單管理</h3>
        </b-col>
      </b-row>
    <div>
    <b-table :items="orders" :fields="fields" stacked="sm" outlined responsive striped hover>
      <template #cell(action)="row">
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? '' : ''}}商品明細
        </b-button>
        <b-button size="sm" variant="danger" class="ml-2" @click="delOrder (row.item._id, row.index)">
          <font-awesome-icon :icon="['far', 'trash-alt']"></font-awesome-icon>
        </b-button>
      </template>
      <template #row-details="row">
        <b-card>
          <h5>訂購內容</h5>
          <b-list-group>
            <b-list-group-item v-for="checkout of row.item.checkouts" :key="checkout.id">
              <div>
                <b-row>
                  <b-col><b-img :src="checkout.src" width="300"></b-img></b-col>
                  <b-col>{{ checkout.name }}</b-col>
                  <b-col>{{ checkout.count }}</b-col>
                  <b-col>{{ checkout.price * checkout.count }}</b-col>
                </b-row>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </template>
    </b-table>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      orders: [],
      fields: [
        {
          key: '_id',
          label: '訂單編號'
        },
        {
          key: 'payName',
          label: '訂購人'
        },
        {
          key: 'phone',
          label: '電話'
        },
        {
          key: 'email',
          label: '電子信箱'
        },
        {
          key: 'address',
          label: '地址'
        },
        {
          key: 'action',
          label: '操作'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    delOrder (id, index) {
      this.axios.delete(process.env.VUE_APP_API + '/orders/' + id)
        .then(res => {
          if (res.data.success) {
            this.orders.splice(index, 1)
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/orders/')
      .then(res => {
        this.orders = res.data.result
      })
  }
}
</script>

<style>
  #order {
    width: 100%;
  }

</style>
