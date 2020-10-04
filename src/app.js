const { program } = require('commander');

const { process } = require('./process');

program
    .storeOptionsAsProperties(true)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <filePath>', 'an input file')
    .option('-o, --output <filePath>', 'an output file')
    .option('-a, --action <encode/decode>', 'an action encode/decode')
    .action(() => process(program.shift, program.input, program.output, program.action));

program.parse(process.argv);
