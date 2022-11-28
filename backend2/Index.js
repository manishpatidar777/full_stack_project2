// const http = require('http')

// http.createServer((req, res) => {
// res.write("Love You ss............."),
// res.end()
// }).listen(8110)



const exp = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = exp();

const bp = require('body-parser');
const rout = require('./routes/routes');

mongoose.connect('mongodb+srv://manishpatidar:6789@cluster0.nl8vssp.mongodb.net/test')
mongoose.connection.once('open', ()=> {console.log('Connection Complete')});

app.use(cors('http://localhost:3000/'))
app.use(bp.json(), rout)
app.listen(8999)