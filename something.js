var fs = require ('fs');

var source = 'C:/temp/A/test1.txt';
var destination = 'C:/temp/B/test1.txt';
var newSource = 'C:/temp/B/test1.txt.new';

function copy() {
  if (fs.existsSync(!desitnation)) {
    fs.createReadStream(source).pipe(fs.createWriteStream(destination));
    fs.renameSync(destination, newSource);
  } else {
    alert('file already exists please delete')
  }

}
