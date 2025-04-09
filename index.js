
import express, { json } from "express"
import { userRouter } from "./routes/users.js"
import { orderRouter } from "./routes/order.js"

const port = 8080 

const app = express()

app.use(json())

app.use("/user", userRouter)
app.use("/order", orderRouter)


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`)
})