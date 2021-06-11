// require your server and launch it here
const dotenv = require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

// console.log(__dirname);
// console.log(__filename)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)

app.use("/api/",(_, res) => {
    res.json({data: "The api is serving data"})
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
