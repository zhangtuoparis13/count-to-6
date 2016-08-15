/**
 * Created by tuo on 16/8/15.
 */

/*
* ES6 template strings are a new string syntax, which use backticks ( `` )
* instead of quotation marks ( '' or "" ). Template strings give you more powerful abilities
* for constructing strings. They allow string interpolation, with syntax like:

 `Hello, ${person}! 1 + 1 = ${1 + 1}!`*/

let name = process.argv[2];
console.log(`Hello, ${name}!`);
console.log(`Your name lowercased is "${name.toLowerCase()}".`);
