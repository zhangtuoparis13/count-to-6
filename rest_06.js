/**
 * Created by TBtuo on 15/08/16.
 */

/**
 *
 * @param args: args is a real array
 * @returns {number}: the sum of the numbers
 */
/*function sum(...args) {
    var result = 0;
    args.forEach(function (value) {
        result+= value;
    });

    return result;
}

console.log(sum(1,2,3,4));*/
//Note that in the above example, args is a real array, with a forEach method and everything.
// Just like the spread operator helps us get rid of
// .apply, rest parameters help us get rid of Array.prototype.slice.call(arguments).
// In fact, you should never need to use the horrible arguments object again. Yayyyy!

// module.exports = function average(...args) {
//     var result = 0 ;
//     var counter = 0 ;
//     args.forEach(function (value) {
//         result += value;
//         counter++;
//     });
//
//     return result/counter;
// };

// module.exports = (...args) => {
//     "use strict";
//     var sum = args.reduce((soFar,value)=>soFar+value);
//     return sum/args.length;
// };

module.exports = (...args) => {
    "use strict";
    var sum = 0;
    args.forEach(value=> sum+=value);
    return sum/args.length
};