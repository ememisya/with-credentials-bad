'use strict';

var express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3002,
    app = express(),
    cookieParser = require('cookie-parser'),
    extend = require('util')._extend, wp = require('./writepid.js');
wp.writePid();

app.use(cookieParser());

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
}

app.options('/wantcookie', cors(extend(corsOptions, {credentials: true})));
app.delete('/wantcookie', cors(extend(corsOptions, {credentials: true})), function(req, res){
  res.json({
    text: 'I DO want your cookies  TO EAT!! MWAHAHAHAHAHAH!',
    cookies: req.cookies
  });
});

if(!module.parent){
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
