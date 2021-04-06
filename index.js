const fs = require('fs')
const express = require('express')
const path = require('path')
require('dotenv').config()

const server = express()

server.use(express.static('./public'))
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.set('view engine', 'ejs')

const pathToRoutes = path.join(__dirname, 'routes')

fs.readdir(pathToRoutes, (err, res) => {
    res.forEach(file => {
        const Route = require(path.join(pathToRoutes, file))
        server.use(Route.path, Route.router)
    })
})

const PORT = process.env.PORT
server.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON: http://localhost:${PORT}`)
})