const express = require('express')
const morgan = require('morgan');
const expressHandlebar = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.engine('hbs', expressHandlebar({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname));
app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.render('item')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})