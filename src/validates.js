const fs = require('fs');

const validates = (action, shift, input, output) => {
    if (!action || !shift || shift < 0 || action !== 'encode' && action !== 'decode') {
        console.error('action & shift are required! shift must be > 0 and action can be "encode" or "decode")');
        process.exit(1);
    }
    if (input && (!fs.existsSync(input) || !fs.lstatSync(input).isFile())) {
        console.error(`file ${input} not found`);
        process.exit(1);
    }
    if (output && (!fs.existsSync(output) || !fs.lstatSync(output).isFile())) {
        console.error(`file ${output} not found`);
        process.exit(1);
    }
};

module.exports = { validates };
