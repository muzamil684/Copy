const exp = require('express')
const userApi = exp.Router()
const expressErrorHandler = require('express-async-handler')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

userApi.use(exp.json())

const mc = require("mongodb").MongoClient

const databaseUrl = process.env.DATABASE_URL

let userCollectionObj;
let userFavShowObj;
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("error is ", err)
    } else {
        let databaseObj;
        databaseObj = client.db("travelBooking")
        userCollectionObj = databaseObj.collection("usercollection")

        console.log("connected to user database")
    }
})

userApi.use(exp.json())


userApi.post("/createuser", async(req, res, next) => {
    let newUser = req.body
    let existed = await userCollectionObj.findOne({ username: newUser.username })
    if (existed !== null) {
        res.send({ message: "user already existed" })
    } else {
        let hashPassword = await bcryptjs.hash(newUser.password, 7)
        newUser.password = hashPassword
        await userCollectionObj.insertOne(newUser)
        res.send({ message: "user is created" })
    }
})

userApi.post("/login", expressErrorHandler(async(req, res, next) => {
    let credentials = req.body

    let un = await userCollectionObj.findOne({ username: credentials.username })
    if (un === null) {
        res.send({ message: "username not found" })
    } else {
        let result = await bcryptjs.compare(credentials.password, un.password)
        if (result === false) {
            res.send({ message: "Wrong Password" })
        } else {
            let signedToken = jwt.sign({ username: credentials.username }, 'abcdef', { expiresIn: 120 })
            res.send({ message: "Login successful", token: signedToken, username: credentials.username, userObj: un })
        }
    }
}))

userApi.put("/updateuser/:username", (req, res, next) => {
    let modifiedUser = req.body

    userCollectionObj.updateOne({ username: modifiedUser.username }, {
        $set: {...modifiedUser }
    }, (err, success) => {
        if (err) {
            res.send({ message: err.message })
        } else {
            res.send({ message: "User dfetails updated" })
        }
    })
})

userApi.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})
module.exports = userApi;