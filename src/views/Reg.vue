<template>
  <b-container id="register">
    <b-row>
      <b-col cols="12" class="pt-4 text-center">
        <p class="user-title">會員註冊</p>
      </b-col>
      <b-col cols="10" md="5" id="register-box">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <b-form-group label="帳號" id="input-group-account" label-for="input-account" :state="accountState" invalid-feedback="帳號格式不符">
            <b-form-input id="input-account" v-model="account" type="text" required="required" placeholder="請輸入帳號" :state="accountState" v-b-popover.click.left="'帳號長度需為 4 ~ 20 個字'"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-password" label="密碼" label-for="input-password" :state="passwordState" invalid-feedback="密碼格式不符">
            <b-form-input id="input-password" v-model="password" type="password" required="required" placeholder="請輸入密碼" :state="passwordState" v-b-popover.click.left="'密碼長度需為 4 ~ 20 個字'"></b-form-input>
          </b-form-group>
          <div>
            <b-btn id="submit-btn" variant="light" type="submit">註冊</b-btn>
          </div>
          <div class="break-heading">
            <span>或</span>
          </div>
          <div>
            <b-btn id="login-btn" variant="light" to="/login">已有帳號直接登入</b-btn>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
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
                this.$router.push('/login')
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

<style lang="scss">
  #register-box {
    padding: 16px 32px 32px;
    border-radius: 8px;
    margin: auto;
  }

  .user-title {
    color: #333;
    font-weight: 700;
    font-size: 1.75rem;
  }

  #input-mail,
  #input-password,
  #input-account {
    position: relative;
    text-align: left;
    padding: 6px 10px 6px 12px;
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  #submit-btn {
    color: #fff;
    background-color: #333;
    border-radius: 0.5rem;
    padding: 0;
    font-weight: 700;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
  }

  #login-btn {
    padding: 0;
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    color: #000;
    border-radius: 0.5rem;
    padding: 0;
    font-weight: 700;
    width: 100%;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
  }

  .break-heading {
    text-align: center;
    position: relative;
    margin: 24px 0;
  }

  .break-heading::before {
    content: '';
    display: block;
    border-bottom: 1px solid #d8d8d8;
    position: absolute;
    top: 50%;
    height: 0;
    width: 100%;
  }

  .break-heading span {
    background-color: #fff;
    display: inline-block;
    position: relative;
    z-index: 1;
    color: #121212;
    font-size: 18px;
    padding: 0 10px;
    font-weight: 700;
  }

</style>
