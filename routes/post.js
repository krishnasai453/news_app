var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/:post_id', function(req, res, next) {
  console.log(req.params)




  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});



module.exports = router;