import express from 'express'
import { createProduct, getProducts, updateProduct, deleteProduct, file } from '../controllers/products.js'
const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/file/:file', file)

export default router
