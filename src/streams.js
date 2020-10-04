const fs = require('fs');

const readStream = (path) => {
    if (path) return fs.createReadStream(path);
    if (!path) {
        console.log('Please enter your text for encoding. To exit, press CTRL + C.');
        return process.stdin;
    }
};

const writeStream = () => fs.createWriteStream('path');

const transformStream = () => () => {

};

module.exports = {
    readStream,
    writeStream,
    transformStream
}
