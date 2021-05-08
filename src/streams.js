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

const writeStream = (path) => {
    if (!path) return process.stdout;

    return fs.createWriteStream(path, { flags: 'a' }).on('close', () => {
        fs.createWriteStream(path, { flags: 'a' }).write(os.EOL);
    });
};

module.exports = {
    readStream,
    writeStream,
};
