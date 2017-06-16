'use strict';

var express = require('express'),
    port = process.env.PORT || 3001,
    app = express(), wp = require('./writepid.js');
wp.writePid();

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Express app listening on port ' + port + '.');
});
