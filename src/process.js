const { pipeline } = require('stream');

const { readStream, transformStream, writeStream, errHandler } = require('./streams');

const process = (action, shift, input, output) => {

    pipeline(
        readStream(input),
        transformStream(shift > 26 ? shift % 26 : shift, action),
        writeStream(output),
        errHandler
    );
};

module.exports = { process };
