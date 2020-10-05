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
        const curr = (chunk, { min, max }) => chunk >= min && chunk <= max;

        const codify = (shift, action, chunk) => {
            const upp = { min: 65, max: 90 };
            const low = { min: 97, max: 122 };

            if (!curr(chunk, low) && !curr(chunk, upp)) return chunk;

            const assembled = curr(chunk, low) ? low : upp;
            const displaced = action === 'encode' ? parseInt(chunk) + parseInt(shift) : parseInt(chunk) - parseInt(shift);

            if (action === 'encode' && displaced > assembled.max) displaced = displaced - assembled.max + assembled.min - 1;
            if (action === 'decode' && displaced < assembled.min) displaced = displaced - assembled.min + assembled.max + 1;

            return displaced;
        };

        for (let i = 0; i < chunk.length; i++) {
            chunk[i] = codify(shift, action, chunk[i]);
        };

        this.push(chunk + '\n');
        done();
    });
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
};
