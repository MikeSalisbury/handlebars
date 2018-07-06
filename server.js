var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

var people = [
  {
    firstName: 'Mike',
    lastName: 'Salisbury'
  },
  {
    firstName: 'Ben',
    lastName: 'Salisbury'
  },
  {
    firstName: 'Chris',
    lastName: 'Salisbury'
  }
];
app.get('/', function(req, res){
  res.render('home', {
    content: "this is some content",
    published: true,
    people
  });
});
app.listen(app.get('port'), function() {
  console.log('Server started on' + app.get('port'));
});
