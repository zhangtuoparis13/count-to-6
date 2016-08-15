/**
 * Created by TBtuo on 15/08/16.
 */

var inputs = process.argv.slice(2);

console.log(process.argv);
// the output
//   [ '/Users/TBtuo/.nvm/versions/node/v6.3.0/bin/node',
//     '/Users/TBtuo/nodejstutorial/count-to-6/arrowfunction_02_solution.js',
//     'hello',
//     'arrow',
//     'function',
//     'zhang',
//     'tuo' ]

var result = inputs.map(s => s[0])
.reduce((soFar, soOn) => soFar + soOn);

console.log(`[${inputs}] becomes "${result}"`);