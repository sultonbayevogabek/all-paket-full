const router = require('express').Router()
const Orders = require('../models/Orders')

router.get('/', (req, res) => {
    res.render('admin-login', {
        error: ''
    })
})

router.post('/', async (req, res) => {
    const {login, password} = req.body

    if (login === 'admin' && password === '123') {
        const orders = await Orders.getOrders()
        res.render('admin', {
            orders
        })
    } else {
        res.render('admin-login', {
            error: 'Error password or login'
        })
    }
})

module.exports = {
    path: '/admin',
    router
}