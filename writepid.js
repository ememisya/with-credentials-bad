var path = require('path'), fs = require('fs');

module.exports = {
  writePid: function () {
    var filename = path.basename(module.parent.filename);
    fs.writeFile("./pids/" + filename + ".pid", process.pid, function(err) {
        if(err) {
            return console.log(err);
        }
    });
  }
}
