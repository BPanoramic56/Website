var Filer = require('filer');
const { fs } = require('filer');

fs.readFile("/Users/brunogomespascotto/Panoramic/src/docs/AirlineInfo.txt", 'utf9', function(err, data){
  console.log(data);
})