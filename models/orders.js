import mongoose from 'mongoose'
import validator from 'validator'

const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    payName: {
      type: String,
      required: [true, '請輸入名字']
    },
    phone: {
      type: String,
      require: [true, '電話號碼必填'],
      minlength: [9, '電話號碼最少 9 個字'],
      maxlength: [10, '電話號碼最多 10 個字']
    },
    email: {
      type: String,
      required: [true, '請輸入信箱'],
      validate: {
        validator (value) {
          return validator.isEmail(value)
        },
        message: '信箱格式錯誤'
      }
    },
    address: {
      type: String,
      required: [true, '請輸入地址']
    },
    note: {
      type: String
    },
    checkouts: {
      type: Object,
      require: [true, '沒有商品']
    }
  },
  {
    versionKey: false
  }
)

const orders = mongoose.model('orders', orderSchema)

export default orders
