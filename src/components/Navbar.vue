<template>
  <div id="navbar">
    <b-navbar class="fixed-top shadow" toggleable="lg" type="light" variant="light">
      <b-container>
        <b-navbar-brand to="/"><img src="../assets/logo.svg" alt="香緣沉香" width="180" height="70" /></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav="is-nav">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="nav-hover" to="/about">關於我們</b-nav-item>
            <b-nav-item class="nav-hover" to="/shop">線上購物</b-nav-item>
            <b-nav-item class="nav-hover" to="/cart">購物車<font-awesome-icon class="mr-2" :icon="['fas', 'shopping-cart']"></font-awesome-icon></b-nav-item>
            <b-nav-item class="nav-hover" v-if="user.admin === 'admin'" to="/dashboard/products">後台管理</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item v-if="user.id.length === 0" to="/login">
              <b-button> 登入
                <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
              </b-button>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item v-if="user.id.length > 0" @click="logout">登出</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      this.axios.delete(process.env.VUE_APP_API + '/users/logout')
        .then(res => {
          // 如果登出成功
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '登出成功'
            })

            // 清除 vuex
            this.$store.commit('logout')

            // 導回首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
        .catch(error => {
          // 如果回來的狀態碼不是 200，直接 alert 錯誤訊息
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        })
    },
    heartbeat () {
      this.axios.get(process.env.VUE_APP_API + '/users/heartbeat')
        .then(res => {
          // 如果 vuex 是登入中
          if (this.user.id.length > 0) {
            // 但是後端沒登入
            if (!res.data) {
              this.$swal({
                icon: 'error',
                title: '錯誤',
                text: '登入時效已過'
              })
              // 登出
              this.$store.commit('logout')
              // 導回首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '發生錯誤'
          })
          // 登出
          this.$store.commit('logout')
          // 導回首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 5000)
  }
}
</script>
