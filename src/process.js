const { pipeline } = require('stream');

const { readStream, writeStream, transformStream } = require('./streams');

const process = (shift, input, output, action) => {
    pipeline(
        readStream(input),
        writeStream(output),
        transformStream(shift, action)
    );
};

module.exports = {
    process
};
