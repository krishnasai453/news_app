var express = require('express');
var router = express.Router();
var newsHttp = require('../services/newshttp.js');

/* GET Contact page. */
router.get('/subscribe', function(req, res, next) {
  res.render('subscribe')});

router.post('/subscribe', function(req, res, next) {
	console.log(req.body["email"]);
	var email = req.body.email;
	req.checkBody('email', 'Email is required').notEmpty();
	var errors = req.validationErrors();

	if(errors) {
		console.log('one of the fields are missings!!');
		console.log(errors);
		res.render('subscribe',{
			errors:errors
		});
	}
	else {
    body = {
            email: email,
            is_verified: "false"
           };
    newsHttp.httpPost("http://localhost:4000/subscribe", body, function (err, resp) {
      if (err) {
        console.log('Oops something went wrong temporary problem!');
        req.flash('error_msg', 'Oops something went wrong temporary problem!');
        res.redirect('/error');
      }
      else if (resp == "subscriber already exists"){
      // Duplicate username
       console.log('User already Subscribed!');
       req.flash('success_msg', 'You have been already subscribed to a2znewstoday.com!!!');
       res.redirect('/');
      }
      else {
        console.log('User email Subscribed!');
        req.flash('success_msg', resp.email + " have been subscribed to a2znewstoday.com Successfully!!!");
      res.redirect('/');
      }
    });
  }

});

module.exports = router;
