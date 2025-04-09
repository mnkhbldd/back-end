import { v4 as uuidv4 } from 'uuid';

const orders = []

export const createOrder = (req, res) => {

    const {food, price, } = req.body 
    orders.push({ id : uuidv4(), food, price, createdat : new Date(), updatedat: new Date()})

    res.send({success : true,
        message: "Order successful"
    })
}