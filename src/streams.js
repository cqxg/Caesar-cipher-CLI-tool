const fs = require('fs');
const os = require('os');
// const through2 = require('through2');

const readStream = (path) => {
    if (!path) {
        console.log('Please enter your text for codify. To exit, press CTRL + C.');
        return process.stdin;
    };

    return fs.createReadStream(path);
};

module.exports = {
    readStream,
};
