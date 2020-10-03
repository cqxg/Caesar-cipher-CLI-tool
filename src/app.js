const { program } = require('commander');

const process = (a, b, c) => {
    console.log(a, b, c)
};

program
    .storeOptionsAsProperties(true)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <filePath>', 'an input file')
    .option('-o, --output <filePath>', 'an output file')
    .option('-a, --action <encode/decode>', 'an action encode/decode')
    .action(() => process(program.shift, program.input, program.output, program.action));

console.log(program.parse(process.argv))