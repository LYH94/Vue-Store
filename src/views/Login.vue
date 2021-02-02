<template>
  <div id="login">
    <b-container>
      <div id="signin">
        <div class="log-card">
          <h1>登入</h1>
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="帳號" label-for="input-1" :state="accountState" description="帳號長度為 4 ~ 20 個字" invalid-feedback="帳號格式不符">
              <b-form-input id="input-1" v-model="account" type="text" required="required" placeholder="請輸入帳號..." :state="accountState"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="密碼" label-for="input-2" :state="passwordState" description="密碼長度為 4 ~ 20 個字" invalid-feedback="密碼格式不符">
              <b-form-input id="input-2" v-model="password" type="password" required="required" placeholder="請輸入密碼..." :state="passwordState"></b-form-input>
            </b-form-group>
            <div align="center">
              <b-btn variant="warning" class="mx-1" type="submit">登入<font-awesome-icon class="ml-1" :icon="['fas', 'user']"></font-awesome-icon>
              </b-btn>
              <b-btn variant="warning" class="mx-1" type="submit" to="/reg"> 註冊<font-awesome-icon class="ml-1" :icon="['fas', 'user-plus']"></font-awesome-icon></b-btn>
            </div>
              <div class="log-text">
                <span>登入</span>
                |
                <span>註冊會員</span>
              </div>
            </b-form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    accountState () {
      if (this.account.length === 0) {
        return null
      } else if (this.account.length >= 4 && this.account.length <= 20) {
        return true
      } else {
        return false
      }
    },
    passwordState () {
      if (this.password.length === 0) {
        return null
      } else if (this.password.length >= 4 && this.password.length <= 20) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onSubmit () {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        this.axios.post(process.env.VUE_APP_API + '/users/login', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$store.commit('login', res.data.result)
              this.$swal({
                icon: 'success',
                title: '登入成功'
              }).then(() => {
                this.$router.push('/')
              })
            } else {
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: err.response.data.message
            })
          })
      }
    },
    onReset () {
      this.account = ''
      this.password = ''
    }
  }
}
</script>
<style>
  #signin {
    position: relative;
    margin-top: 200px;
    height: 400px;
    background: #212529;
  }

  .log-card {
    width: 90%;
    height: 480px;
    padding: 30px;
    top: -40px;
    left: 25px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    position: absolute;
  }

  .log-card h1 {
    margin-top: 50px;
    color:#013b7a;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bolder;
  }

  form {
    margin-top: 40px;
  }

  .log-text {
    display: none;
  }

@media (min-width: 992px){
  #signin {
    position: relative;
    margin-top: 200px;
    height: 500px;
    background: #212529;
  }

  .log-card {
    width: 50%;
    height: 600px;
    padding: 30px;
    top: -50px;
    left: 80px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    position: absolute;
  }

  .log-card h1 {
    margin-top: 50px;
    color:#013b7a;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bolder;
  }

  form {
    margin-top: 80px;
  }

  .log-text {
    display: block;
    width: 180px;
    position: absolute;
    left: 700px;
    top: 250px;
    font-size: 2rem;
    color: #ffc107;
  }
}
</style>
