import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, '缺少商品名稱']
    },
    file: {
      type: String,
      required: [true, '缺少檔案名稱']
    },
    type: {
      type: String
    },
    price: {
      type: Number,
      min: [0, '價格無效'],
      required: [true, '缺少商品價格']
    },
    description: {
      type: String,
      required: [true, '缺少商品說明']
    },
    quantity: {
      type: Number,
      min: [0, '數量無效'],
      required: [true, '缺少商品庫存數']
    }
  }
)

const products = mongoose.model('products', productSchema)

export default products
