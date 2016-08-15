/**
 * Created by TBtuo on 15/08/16.
 */

/*
function log(arg,transform = x => x) {
    // "use strict";
    console.log(transform(arg));
}

console.log(log("Hello"));
console.log(log("Hello", y =>y.toUpperCase()));
*/

/*
module.exports = function (string, bangs = string.length) {
    return string + "!".repeat(bangs);
};*/

module.exports =
    (string, bangs =string.length) => string + "!".repeat(bangs);