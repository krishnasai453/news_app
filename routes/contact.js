var express = require('express');
var router = express.Router();
var newsHttp = require('../services/newshttp.js');

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact')});

router.post('/contact', function(req, res, next) {
	console.log(req.body);
	var email = req.body.email;
	var name = req.body.name;
	var title = req.body.title;
	var message = req.body.message;
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('name', 	'Name is required').notEmpty();
	req.checkBody('title', 'Title is required').notEmpty();
	req.checkBody('message', 'Message is required').notEmpty();
	var errors = req.validationErrors();

	if(errors) {
		console.log('one of the fields are missings!!');
		console.log(errors);
		res.render('contact',{
			errors:errors
		});
	}
	else {
		body = {
			email: email,
			name: name,
      title: title,
			message: message
			};
		newsHttp.httpPost("http://localhost:4000/contact", body, function (err, resp) {
      if (err) {
          console.log('Oops something went wrong temporary problem!');
          req.flash('error_msg', 'Oops something went wrong temporary problem!');
          res.redirect('/error');
      } 
      else if (resp == "error"){
	  	console.log('Oops something went wrong temporary problem!');
          req.flash('error_msg', 'Oops something went wrong temporary problem!');
          res.redirect('/error');
			}
			else {
				console.log('success sending user message');
				req.flash('success_msg', "Your message have been submitted to a2znewstoday.com Successfully!");
				res.redirect('/contact');
			}
    });
	}	

});	


module.exports = router;