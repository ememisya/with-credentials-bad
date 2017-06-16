'use strict';

var express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    app = express(),
    extend = require('util')._extend, wp = require('./writepid.js');

wp.writePid();

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
}

app.options('/cookie', cors(corsOptions));
app.get('/cookie', cors(corsOptions), function(req, res){
  res.cookie('COOKIE_YOU_WANT_TO_SEND', new Date());
  res.cookie('COOKIE_YOU_DONT_WANT_TO_SEND', new Date());
  res.redirect('http://localhost:3001/index.html');
});


app.options('/nocookie', cors(corsOptions));
app.delete('/nocookie', cors(corsOptions), function(req, res){
  res.json({
    text: 'I do not want your cookies'
  });
});

app.options('/wantcookie', cors(extend(corsOptions, {credentials: true})));
app.delete('/wantcookie', cors(extend(corsOptions, {credentials: true})), function(req, res){
  res.json({
    text: 'I DO want your cookies'
  });
});

if(!module.parent){
  app.listen(port, function(){
    console.log('Express server listening on port ' + port + '.');
  });
}
