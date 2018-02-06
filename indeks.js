const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const exps = ["Linux","Java","Ninja Framework","Android Studio","Gesture Builder",
"Java Server Faces","Git","Docker","Svg","Inkscape","GIMP","CSS","Bootstrap",
"Postgresql","MySQL","MongoDB","Javascript","Node.js","C","C++","Qt","Python","Wordpress","Woocommerce",
"XML","XSLT","Cocoon","MS Project","Project management","EPM@Daimler","houstonIT","MS Sharepoint","MS Excel","MS Word","MS Outlook",
"MS Powerpoint","Libre Office","Customer Service","Mentoring","Translating"];

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
  console.log(`Nicole P. is listening...`);
});
