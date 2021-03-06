var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
/*  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });*/
	res.render('index', {"posts":[
    {
      "author": "Internet Desk",
      "title": "Panneerselvam, Deepa join hands at Jayalalithaa's memorial",
      "description": "Wherever I am, I will be handling the party affairs, says Saiskala addressing the media at Poes Garden",
      "url": "/posts/123456",
      "urlToImage": "http://www.thehindu.com/incoming/article17303413.ece/ALTERNATES/LANDSCAPE_615/DEEPA%20OPS%201%20jpg",
      "publishedAt": "2017-02-14T19:15:07Z"
    },
    {
      "author": "Krishnadas Rajagopal",
      "title": "Jayalalithaa, Sasikala criminally conspired at Poes Garden to launder ill-gotten wealth: SC",
      "description": "SC verdict accuses Jayalalithaa as a mastermind who misused her public office",
      "url": "http://www.thehindu.com/news/national/tamil-nadu/Jayalalithaa-Sasikala-criminally-conspired-at-Poes-Garden-to-launder-ill-gotten-wealth-SC/article17301596.ece",
      "urlToImage": "http://www.thehindu.com/news/national/tamil-nadu/article17301664.ece/ALTERNATES/LANDSCAPE_615/IN14%20JAYA%20AND%20SASI",
      "publishedAt": "2017-02-14T12:29:38Z"
    },
    {
      "author": "Mandira Moddie",
      "title": "How the courts tracked the cash flow in Poes Garden",
      "description": "The Supreme Court on Tuesday upheld a Trial Court’s verdict convicting AIADMK’s interim general secretary V.K. Sasikala, her relatives V.N. Sudhakaran and J. Ilavarasi, of criminal conspiracy to acqui",
      "url": "http://www.thehindu.com/news/national/How-the-courts-tracked-the-cash-flow-in-Poes-Garden/article17302068.ece",
      "urlToImage": "http://www.thehindu.com/news/national/tamil-nadu/article17301595.ece/ALTERNATES/LANDSCAPE_615/IN14%20JAYALALITHAA",
      "publishedAt": "2017-02-14T17:02:11Z"
    },
    {
      "author": "Syed Muthahar Saqaf",
      "title": "Staunch Jayalalithaa loyalist, Edappadi Palaniswami emerges from shadows",
      "description": "The AIADMK’s new Legislature Party leader ‘Edapaddi’ K. Palaniswami, who is the Minister for Public Works Department, State Highways and Minor Ports, has been a staunch loyalist of All India Anna Drav",
      "url": "http://www.thehindu.com/news/national/tamil-nadu/Staunch-Jayalalithaa-loyalist-Edappadi-Palaniswami-emerges-from-shadows/article17300830.ece",
      "urlToImage": "http://www.thehindu.com/news/national/tamil-nadu/article17300838.ece/ALTERNATES/LANDSCAPE_615/IN14_PALANI",
      "publishedAt": "2017-02-14T10:22:25Z"
    },
    {
      "author": "K Deepalakshmi",
      "title": "How the battle for CM will proceed on the floor of the house",
      "description": "As the battle for chief ministership between O. Panneerselvam and V.K. Sasikala gets drawn out, all eyes are on Tamil Nadu’s Acting Governor Ch Vidyasagar Rao.One of the options for Mr. Rao to end the",
      "url": "http://www.thehindu.com/news/national/tamil-nadu/How-the-battle-for-CM-will-proceed-on-the-floor-of-the-house/article17297687.ece",
      "urlToImage": "http://www.thehindu.com/news/national/tamil-nadu/article17082478.ece/ALTERNATES/LANDSCAPE_615/GOVERNOR_ADDRESSES_TAMIL_ASSEMBLY",
      "publishedAt": "2017-02-14T12:09:38Z"
    },
    {
      "author": "D Suresh Kumar",
      "title": "In 2000, it took three days for Special Court to assess Jayalalithaa-Sasikala’s jewels",
      "description": "Curiously, a male typist got carried away and put a ‘kaasumalai’ weighing 487.4 grams around his neck for a brief while, before handing it over to others.",
      "url": "http://www.thehindu.com/news/national/tamil-nadu/In-2000-it-took-three-days-for-Special-Court-to-assess-Jayalalithaa-Sasikala%E2%80%99s-jewels/article17301734.ece",
      "urlToImage": "http://www.thehindu.com/news/national/tamil-nadu/article11112827.ece/ALTERNATES/LANDSCAPE_615/JEWSL",
      "publishedAt": "2017-02-14T13:44:13Z"
    },
    {
      "author": "PTI",
      "title": "Audience need not stand when National Anthem is part of film: Supreme Court",
      "description": "The Supreme Court today clarified that the audience need not stand when the National Anthem is played as a part of the storyline of a film, newsreel or documentary.A Bench of Justices Dipak Misra and",
      "url": "http://www.thehindu.com/news/national/Audience-need-not-stand-when-National-Anthem-is-part-of-film-Supreme-Court/article17300858.ece",
      "urlToImage": "http://www.thehindu.com/entertainment/movies/article16945000.ece/ALTERNATES/LANDSCAPE_615/Anthem",
      "publishedAt": "2017-02-14T11:52:34Z"
    },
    {
      "author": "VARGHESE K. GEORGE",
      "title": "U.S. National Security Adviser Michael Flynn resigns",
      "description": "His ties to Russia caused concern among other senior aides.",
      "url": "http://www.thehindu.com/news/international/U.S.-National-Security-Adviser-Michael-Flynn-resigns/article17300565.ece",
      "urlToImage": "http://www.thehindu.com/news/international/article17131714.ece/ALTERNATES/LANDSCAPE_615/Michael",
      "publishedAt": "2017-02-14T19:04:31Z"
    },
    {
      "author": "",
      "title": "The conviction and after",
      "description": "Corruption in high places is a malaise that is easy to diagnose but difficult to cure. Even in the rare cases they are arraigned before a court, top politicians often pay their way through legal battl",
      "url": "http://www.thehindu.com/opinion/editorial/The-conviction-and-after/article17302631.ece",
      "urlToImage": "http://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
      "publishedAt": "2017-02-14T18:54:00Z"
    },
    {
      "author": "",
      "title": "Early setback for Mr. Trump",
      "description": "President Donald Trump suffered a big political blow on Monday, barely a month into office, when his National Security Adviser, Michael Flynn, resigned over his Russia contacts. Mr. Flynn, a close aid",
      "url": "http://www.thehindu.com/opinion/editorial/Early-setback-for-Mr.-Trump/article17302633.ece",
      "urlToImage": "http://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
      "publishedAt": "2017-02-14T19:02:09Z"
    }
  ]
			});
});



module.exports = router;
