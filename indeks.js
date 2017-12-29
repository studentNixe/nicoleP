const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const exps = ["java","mongodb","git","svg","mysql","docker","javascript"];

// set view
app.set('view engine', 'ejs');
// set bodyparser
app.use(bodyparser.urlencoded({ extended: true }));
// public directory
app.use(express.static('./assets'));

// link 2 index page
app.get('/', function(req, res){
    res.render('pages/indeks',{
        exps
    });
});

app.listen(8080, (err) => {
    if (err) {
        return console.error(err);
    }
  console.log(`Nicole is listening...`);
});
