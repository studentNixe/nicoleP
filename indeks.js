const express = require('express');

const app = express();

// set view
app.set('view engine', 'ejs');
app.use(express.static('./assets'));

// link 2 index page 
app.get('/', function(req, res) {
    res.render('pages/indeks');
});

app.listen(8080, (err) => {
    if (err) {
        return console.error(err);
    }
  console.log(`Nicole is listening...`);
});



