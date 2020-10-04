const fs = require('fs');
const through2 = require('through2');

const readStream = (path) => {
    if (!path) {
        console.log('Please enter your text for encoding. To exit, press CTRL + C.');
        return process.stdin;
    };

    return fs.createReadStream(path);
};

const transformStream = (shift, action) => {
    return through2(function (chunk, enc, done) {
        // chunk = chunk.toString().split('').reverse().join('');
        this.push(chunk + '\n');
        done();
    })
};

const writeStream = (path) => {
    if (!path) return process.stdout;

    return fs.createWriteStream(path);
};

const errHandler = (err) => {
    if (err) return console.error('Pipeline failed.', err);
};

module.exports = {
    readStream,
    writeStream,
    transformStream,
    errHandler
}
