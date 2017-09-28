var express = require('express');
var router = express.Router();
let request = require('request');
let stubhub = require('../config')

/* GET home page. */

router.post('/', function(req, res, next) {

  console.log('eventListing request', req.body.eventId)
  let options = {
    url: 'https://api.stubhub.com/search/inventory/v2?eventid='+req.body.eventId+'&pricemax=40&sort=currentprice%20asc',
    headers: {
      // Authorization: 'Bearer '+ stubhub.App_Token
      Authorization: 'Bearer c0a11ca9-e003-3f6c-8fde-056c0ceb8220'
    }
  }

  request(options, function(error, response, body) {
    console.log('eventListing Post request response body', JSON.parse(body))
    if (!error) {
      res.send(body);
      // console.log('listing request response', JSON.parse(body))
    } else if (err) {
      console.log(err);
    }
  });
});


module.exports = router;


