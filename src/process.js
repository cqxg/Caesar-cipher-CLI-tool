const { pipeline } = require('stream');
const fs = require('fs');

const { readStream, writeStream, transformStream, errHandler } = require('./streams');

const process = (shift, input, output, action) => {
    pipeline(
        readStream(input),
        transformStream(shift, action),
        writeStream(output),
        errHandler
    );
};

module.exports = {
    process
};
