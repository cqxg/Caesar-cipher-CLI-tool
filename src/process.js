const { pipeline } = require('stream');

const { validates } = require('./validates');

const { readStream, transformStream, writeStream, errHandler } = require('./streams');

const process = (action, shift, input, output) => {
    validates(action, shift, input, output);

    pipeline(
        readStream(input),
        transformStream(shift, action),
        writeStream(output),
        errHandler
    );
};

module.exports = { process };
