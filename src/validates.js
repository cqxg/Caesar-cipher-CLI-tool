const validates = (action, shift) => {
    if (!action || !shift || shift < 0 || action !== 'encode' && action !== 'decode') {
        console.error('action & shift are required! shift must be > 0 and action can be "encode" or "decode")');
        process.exit(1);
    };
};

module.exports = { validates };
