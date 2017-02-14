var express = require('express');
var path    = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');

var app = express();


var routes = require('./routes/index');
// view engine

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// body-parser middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// set public folder

app.use(express.static(path.join(__dirname, 'public')));


// express-sessions

app.use(session({
  secret: 'raju',
  saveUninitialized: true,
  resave: true
}));


// connect flash

app.use(flash());

// global vars

app.use(function (req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user||null;
	next();
});


app.use('/', routes);

//set port

app.set('port', (process.env.PORT || 8081));

// start server

app.listen(app.get('port'), function(){
	console.log('Server started on port : ' + app.get('port'));
});