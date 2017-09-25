var express = require('express');
var router = express.Router();
let request = require('request');
let stubhub = require('../config')

/* GET home page. */

router.post('/', function(req, res, next) {
  console.log('api post successful!', req.body.eventName, req.body.eventLocation, req.body.eventRadius)
  let options = {
    url: 'https://api.stubhub.com/search/catalog/events/v3?status=active%20|contingent&q='+req.body.eventName+'&start=0&rows=20&geoExpansion=false&sort=eventDateLocal%20asc&radius='+req.body.eventRadius+'&city='+req.body.eventLocation,//+'&postalCode=91765',
    // OG REQUEST 
    // url: 'https://api.stubhub.com/search/catalog/events/v3?status=active%20|contingent&name=angels&start=0&rows=200&geoExpansion=false&sort=popularity%20asc&radius=100&city=los%20angeles',
    headers: {
      // Authorization: 'Bearer '+ stubhub.App_Token
      Authorization: 'Bearer c0a11ca9-e003-3f6c-8fde-056c0ceb8220'
    }
  }
  
  request(options, function(error, response, body) {
    if (!error) {
      res.send(body);
      // console.log(JSON.parse(body))
    } else if (error) {
      console.log('api post server error!', error);
    }
  });
});

module.exports = router;


