const { program } = require('commander');

const { process } = require('./process');

program
    .storeOptionsAsProperties(true)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <path>', 'an input file')
    .option('-o, --output <path>', 'an output file')
    .option('-a, --action <encode/decode>', 'an action encode/decode')
    .action(() => process(program.action, program.shift, program.input, program.output));

program.parse(process.argv);
