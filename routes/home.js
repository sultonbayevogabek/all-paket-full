const router = require('express').Router()
const Orders = require('../models/orders')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
moment.locale('uz')

router.get('/', (req, res) => {
    res.render('index')
})


router.post('/', async (req, res) => {
    let {customer_name, customer_phone, product_name} = req.body

    if (customer_name && customer_phone) {
        const data = await Orders.getOrders()
        data.push({
            id: uuidv4(),
            customer_name,
            customer_phone,
            product_name,
            order_time: moment().format("MMMM Do YYYY, h:mm:ss")
        })
        await Orders.addOrder(JSON.stringify(data))
        res.render('ordered')
    }
})

module.exports = {
    path: '/',
    router
}
