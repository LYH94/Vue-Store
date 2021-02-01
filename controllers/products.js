import multer from 'multer'
import FTPStorage from 'multer-ftp'
import path from 'path'
import axios from 'axios'
import fs from 'fs'
import dotenv from 'dotenv'

import products from '../models/products.js'

dotenv.config()

let storage
// 本機開發，檔案存電腦
// 雲端環境，檔案存 FTP
if (process.env.DEV === 'true') {
  storage = multer.diskStorage({
    destination (req, file, callback) {
      callback(null, 'images/')
    },
    filename (req, file, callback) {
      callback(null, Date.now() + path.extname(file.originalname))
    }
  })
} else {
  storage = new FTPStorage({
    // FTP 登入設定
    ftp: {
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    },
    // 上傳的路徑含檔名
    // 路徑為 FTP 的絕對路徑
    destination (req, file, options, callback) {
      callback(null, '/' + Date.now() + path.extname(file.originalname))
    }
  })
}
// 上傳設定
const upload = multer({
  storage,
  // 過濾檔案
  fileFilter (req, file, callback) {
    if (file.mimetype.includes('image')) {
      callback(null, true)
    } else {
      // 回應一個 multer 錯誤
      // 因為套件觸發的錯誤類型是 MulterError
      // 觸發跟套件一樣的錯誤類型保持格式統一，就不用另外寫判斷是哪種錯誤，也能直接知道是上傳發生的錯誤
      // LIMIT_FORMAT 是自訂錯誤 CODE，和內建的格式統一
      callback(new multer.MulterError('LIMIT_FORMAT'), false)
    }
  },
  limits: {
    // 大小限制 1MB
    // 單位是 B
    // 1KB = 1024B
    // 1MB = 1024KB
    fileSize: 1024 * 1024
  }
})

export const createProduct = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }

  upload.single('image')(req, res, async error => {
    if (error instanceof multer.MulterError) {
      let message = ''
      if (error.code === 'LIMIT_FILE_SIZE') {
        message = '檔案太大'
      } else if (error.code === 'LIMIT_FORMAT') {
        message = '格式不符'
      } else {
        message = '上傳錯誤'
      }

      res.status(400).send({ success: false, message })
    } else if (error) {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    } else {
      try {
        let file = ''
        if (process.env.DEV === 'true') {
          file = req.file.filename
        } else {
          file = path.basename(req.file.path)
        }
        const result = await products.create({
          name: req.body.name,
          price: req.body.price,
          quantity: req.body.quantity,
          description: req.body.description,
          type: req.body.type,
          place: req.body.place,
          file
        })
        res.status(200).send({ success: true, message: '', result })
      } catch (error) {
        if (error.name === 'ValidationError') {
          const key = Object.keys(error.errors)[0]
          const message = error.errors[key].message
          res.status(400).send({ success: false, message })
        } else {
          res.status(500).send({ success: false, message: '伺服器錯誤' })
        }
      }
    }
  })
}

export const getProducts = async (req, res) => {
  try {
    const result = await products.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: '發生錯誤' })
  }
}

export const file = async (req, res) => {
  // 開發環境回傳本機圖片
  if (process.env.DEV === 'true') {
    const path = process.cwd() + '/images/' + req.params.file
    const exists = fs.existsSync(path)

    if (exists) {
      res.status(200).sendFile(path)
    } else {
      res.status(404).send({ success: false, message: '找不到圖片' })
    }
  } else {
    axios({
      method: 'GET',
      url: 'http://' + process.env.FTP_HOST + '/' + process.env.FTP_USER + '/' + req.params.file,
      responseType: 'stream'
    }).then(ress => {
      ress.data.pipe(res)
    }).catch(error => {
      res.status(error.response.status).send({ success: false, message: '取得圖片失敗' })
    })
  }
}

export const updateProduct = async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '格式錯誤' })
    return
  }

  try {
    const result = await products.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (result != null) {
      res.status(200).send({ success: true, message: '', result })
    } else {
      res.status(404).send({ success: false, message: '找不到商品' })
    }
  } catch (error) {
    console.log(error)

    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到商品' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const result = await products.findByIdAndDelete(req.params.id)

    if (result != null) {
      res.status(200).send({ success: true, message: '' })
    } else {
      res.status(404).send({ success: false, message: '找不到商品' })
    }
  } catch (error) {
    console.log(error)

    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到商品' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}
