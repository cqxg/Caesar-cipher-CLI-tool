const fs = require('fs');

const readStream = () => fs.createReadStream('path');

const writeStream = () => fs.createWriteStream('path');

const transformStream = (chunk, encoding, callback) => callback('some callback');

module.exports = {
    readStream,
    writeStream,
    transformStream
}