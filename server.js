const express = require('express');

const methodOverride = require('method-override')

const mongoConfig = require('./config')

require('dotenv').config()

mongoConfig()

const gemRoutes=require('./routes/gemRoutes')

const PORT = process.env.PORT

const app = express()

app.use("/gems", gemRoutes)

// connectDatabase();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
// app.use(express.json())
app.use(methodOverride("_method"))


// app.get("/", (req, res) => {
//     res.send("API is running....")
// })



app.listen(PORT, () => console.log('Listening on port: ', PORT))


