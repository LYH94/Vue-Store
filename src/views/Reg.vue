<template>
  <div id="reg">
    <b-container>
      <div id="register">
        <div class="reg-card">
          <h1>註冊</h1>
          <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="帳號" label-for="input-1" :state="accountState" description="帳號長度為 4 ~ 20 個字" invalid-feedback="帳號格式不符">
              <b-form-input id="input-1" v-model="account" type="text" required="required" placeholder="請輸入帳號..." :state="accountState"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="密碼" label-for="input-2" :state="passwordState" description="密碼長度為 4 ~ 20 個字" invalid-feedback="密碼格式不符">
              <b-form-input id="input-2" v-model="password" type="password" required="required" placeholder="請輸入密碼..." :state="passwordState"></b-form-input>
            </b-form-group>
            <div class="text-center">
              <b-btn class="mx-1" variant="warning" type="submit">註冊
              </b-btn>
            </div>
          </b-form>
          <div class="reg-text">
            加入會員即可訂購
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Reg',
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
        this.axios.post(process.env.VUE_APP_API + '/users/', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'success',
                title: '註冊成功',
                text: '歡迎加入香緣沉香'
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
  #register {
    position: relative;
    margin-top: 200px;
    height: 400px;
    background: #212529;
  }

  .reg-card {
    width: 90%;
    height: 480px;
    padding: 30px;
    top: -40px;
    left: 25px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    position: absolute;
  }

  .reg-card h1 {
    margin-top: 50px;
    color:#013b7a;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bolder;
  }

  form {
    margin-top: 10px;
  }

  .reg-text {
    display: none;
  }

@media (min-width: 992px){
  #register {
    position: relative;
    margin-top: 200px;
    height: 500px;
    background: #212529;
  }

  .reg-card {
    width: 50%;
    height: 600px;
    padding: 30px;
    top: -50px;
    left: 500px;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    position: absolute;
  }

  .reg-card h1 {
    margin-top: 60px;
    color:#013b7a;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bolder;
  }

  form {
    margin-top: 80px;
  }

  .reg-text {
    display: block;
    width: 140px;
    position: absolute;
    left: -300px;
    top: 250px;
    font-size: 2rem;
    color: #ffc107;
  }
}
</style>
