import express from "express"
import { createOrder } from "../controllers/order.js"

export const orderRouter = express.Router()

orderRouter
    .post("/", createOrder)