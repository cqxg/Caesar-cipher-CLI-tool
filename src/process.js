const { readStream, writeStream, transformStream } = require('./streams');

const process = () => {
    console.log(readStream, writeStream, transformStream)
};

process();