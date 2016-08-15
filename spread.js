/**
 * Created by TBtuo on 15/08/16.
 */

// var number  = [1,2,3,4,8,10];
//
// var max = Math.max(...number);
// console.log(`the maximum is ${max}!`);
// console.log("another way of maximum is : " + max);

var inputs = process.argv.splice(2);
var outputs = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${outputs}`);

