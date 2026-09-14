const { copyFile } = require('fs');

function callback(err) {
    console.log(err);
}

copyFile('./files/source.txt', './files/destination.txt', callback);
