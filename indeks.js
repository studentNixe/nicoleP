const express = require('express');

const app = express();
const bodyparser = require('body-parser');

const exps = ["Linux","Java","Ninja Framework","Android Studio","Gesture Builder",
"Java Server Faces","Git","Docker","Svg","Inkscape","GIMP","CSS","Bootstrap",
"Postgresql","MySQL","MongoDB","Javascript","Node.js","C","C++","Qt","Python","Wordpress","Woocommerce",
"XML","XSLT","Cocoon","MS Project","Project management","EPM@Daimler","houstonIT","MS Sharepoint","MS Excel","MS Word","MS Outlook",
"MS Powerpoint","Libre Office","Customer Service","Mentoring","Translating"];


// set bodyparser
app.use(bodyparser.urlencoded({ extended: true }));
// public directory
app.use(express.static('./assets'));

// set view
app.set('view engine', 'ejs');

const pics = [
  ["2017cebit.jpg","Modern Michelangelo"],
  ["firstLamps.JPG","My first lamps in 2009"],
  ["universityOfSilesia.JPG","The University of Silesia in Katowice, Poland"]
];

 pics.forEach(function (pic) {
   console.log('Datei: '+ pic[0] + ' , Text: ' + pic[1]);
 });


// link 2 index page
app.get('/', function(req, res){
    res.render('pages/indeks',{
        exps
    });
});

// route 2 gallery
app.get('/gallery', function(req, res){
  res.render('pages/gallery',{
    pics
  });
});

app.listen(8080, (err) => {
    if (err) {
        return console.error(err);
    }
  console.log(`Nicole P. is listening...`);
});
