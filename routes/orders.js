import express from 'express'
import { createOrder, getOrderById, getAllOrders, updateOrder, deleteOrder } from '../controllers/orders.js'

const router = express.Router()

// 最終路徑是 Orders
router.post('/', createOrder)
// 最終路徑是 /Orders/id
router.get('/:id', getOrderById)
// 查詢
router.get('/', getAllOrders)
// 修改
router.patch('/:id', updateOrder)
// 刪除
router.delete('/:id', deleteOrder)
export default router
