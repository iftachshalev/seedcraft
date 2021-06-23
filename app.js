
const express = require('express')
const mongoose = require('mongoose')
const SeedModel = require('./models/seed')
const app = express()
const port = 3000
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

mongoose.connect('mongodb://localhost:27017/seedcraft', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
  res.render('index')
})

app.get("/seeds", (req, res) => {
  res.render("seeds")
})

app.listen(port, () => {
  console.log(`seedcraft is runing...2346798734798`)
})