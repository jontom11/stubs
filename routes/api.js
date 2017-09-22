var express = require('express');
var router = express.Router();
let request = require('request');
let stubhub = require('../config')

/* GET home page. */

router.post('/', function(req, res, next) {
  console.log('body', req.body.eventName, req.body.eventLocation)
  let options = {
    url: 'https://api.stubhub.com/search/catalog/events/v3?status=active%20|contingent&name='+req.body.eventName+'&start=0&rows=200&geoExpansion=false&sort=eventDateLocal%20asc&radius=200&city='+req.body.eventLocation,
    headers: {
      // Authorization: 'Bearer '+ stubhub.App_Token
      Authorization: 'Bearer 0f5632aa-6a3f-3fb8-b76f-35dc56e1cfa3'
    }
  }
  
  request(options, function(error, response, body) {
    if (!error) {
      res.send(body);
      console.log(JSON.parse(body))
    } else if (err) {
      console.log(err);
    }
  });
});

module.exports = router;


