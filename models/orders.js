const path = require('path')
const fs = require('fs/promises')

const pathToDB = path.join(__dirname, '..', 'data', 'orders.json')

module.exports = class Orders {
    static async getOrders() {
        const orders = await fs.readFile(pathToDB, 'utf-8')
        return await JSON.parse(orders)
    }

    static async addOrder(content) {
        await fs.writeFile(pathToDB, content, 'utf-8')
    }
}