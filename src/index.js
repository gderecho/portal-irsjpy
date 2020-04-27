
const express = require('express')
const passport = require('passport')
const apistrategy = require('ibmcloud-appid').APIStrategy;
const cors = require('cors')

const PORT = process.env.IRSJPY_PORTAL_PORT || 5500
const app = express();


app.use(cors())
app.use(passport.initialize())

passport.use(new apistrategy({
    oauthServerUrl: process.env.APPID_SERVER_URL,
}))

app.use(passport.authenticate(apistrategy.STRATEGY_NAME, {
    session: false,
}))


app.get('/', (req, res) => {
    res.send({"message": "Hello"})
})


app.listen(PORT, () => {
    console.info(`Portal listening on ${PORT}`)
})
