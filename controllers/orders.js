import orders from '../models/orders.js'

export const createOrder = async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '格式錯誤' })
    return
  }
  try {
    const result = await orders.create({
      payName: req.body.payName,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      note: req.body.note,
      checkouts: req.body.checkouts
    })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}

export const getOrderById = async (req, res) => {
  try {
    const result = await orders.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到訂單' })
    } else {
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到訂單' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}

export const getAllOrders = async (req, res) => {
  try {
    const result = await orders.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: '發生錯誤' })
  }
}

export const updateOrder = async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '格式錯誤' })
    return
  }

  try {
    const result = await orders.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (result != null) {
      res.status(200).send({ success: true, message: '', result })
    } else {
      res.status(404).send({ success: false, message: '找不到訂單' })
    }
  } catch (error) {
    console.log(error)

    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到訂單' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}

export const deleteOrder = async (req, res) => {
  try {
    const result = await orders.findByIdAndDelete(req.params.id)

    if (result != null) {
      res.status(200).send({ success: true, message: '' })
    } else {
      res.status(404).send({ success: false, message: '找不到訂單' })
    }
  } catch (error) {
    console.log(error)

    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到訂單' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}
