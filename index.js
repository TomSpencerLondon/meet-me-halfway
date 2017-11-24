var express = require('express');

var app = express();

app.disable('x-powered-by'); // improves security by hiding info from the header

var handlebars = require('express-handlebars').create({defaultLayout:'main'}); // set default layout to main.handlebars

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static('public')); //lets you reference public folder/imgaes

app.get('/', function(req, res){
  res.render('home');  //renders home.handlebars
});

app.use(function(err, req, res, next){
  console.log('Error : ' + err.message);
  next();
})

// app.get('/about', function(req, res){
//   res.render('about');
// });
//
// app.use(function(req, res){
//   res.type('text/html');
//   res.status(404);
//   res.render('404');
// });
//
// app.use(function(err, req, res, next){
//   console.error(err.stack);
//   res.status(500);
//   res.render('500');
// })

app.listen(app.get('port'), function() {   // defines what port we listne to
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});
