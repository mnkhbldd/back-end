// console.log("Hello, world!");
// // const http = require("http")
import express, { json } from "express"

// // console.log(http, "http")

// const port = 8000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/json")
//     const movie = {
//         "popularity": 878.5405,
//         "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
//         "release_date": "2025-03-31",
//         "title": "A Minecraft Movie",
//         "video": false,
//         "vote_average": 6.029,
//         "vote_count": 223
//     }

//     // parse n json ig string 
//     // stringfy json bolgon
//     // console.log(JSON.parse(movie))
//     res.end(JSON.stringify(movie))
// })

// server.listen(port, () => {
//     console.log(`server running at http://localhost:${port}/`)
// })

// Express

const port = 8080 

const app = express()

app.use(json())

app.get('/', (req, res) => {
    res.send("hello world")
})


app.get('/user', (req, res) => {
    // console.log(req.body, "body");
    const {username, password} = req.body

    if (username.length < 5 ) {
        res.status(404).send({
            success: false,
            message: "username invalid"
        }).end();
    }

    if (password.length <5) {
        res.status(405).send({
            success: false, 
            message: "password length is low"
        }).end();
    }
    
    res.send({ success: true}).end()
})


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`)
})