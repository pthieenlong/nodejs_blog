const express = require('express')
const morgan = require('morgan');
const expressHandlebar = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;


//handlebar
app.engine('hbs', expressHandlebar({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources'));
// Morgan
app.use(morgan('combined'));
//express
app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));
//engine
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/item', (req, res) => {
  res.render('item')
})
app.get('/test', (req, res) => {
  res.render('test')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})