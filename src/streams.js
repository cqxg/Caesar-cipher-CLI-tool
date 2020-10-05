const fs = require('fs');
const os = require('os');
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
        const curr = (chunk, { start, end }) => chunk >= start && chunk <= end;

        const codify = (shift, action, chunk) => {
            const upp = { start: 65, end: 90 };
            const low = { start: 97, end: 122 };

            if (!curr(chunk, low) && !curr(chunk, upp)) return chunk;

            const assembled = curr(chunk, low) ? low : upp;
            let displaced = action === 'encode' ? parseInt(chunk) + parseInt(shift) : parseInt(chunk) - parseInt(shift);

            if (action === 'encode' && displaced > assembled.end) displaced = displaced - assembled.end + assembled.start - 1;
            if (action === 'decode' && displaced < assembled.start) displaced = displaced - assembled.start + assembled.end + 1;

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

    return fs.createWriteStream(path, { flags: 'a' }).on('close', () => {
        fs.createWriteStream(path, { flags: 'a' }).write(os.EOL);
    });
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
