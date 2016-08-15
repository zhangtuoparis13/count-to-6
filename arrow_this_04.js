/**
 * Created by TBtuo on 15/08/16.
 */
// var foot ={
//     kick : function () {
//         this.yelp = "Ouch!";
//         setImmediate(function () {
//             console.log(this.yelp);
//         });
//     }
// };
// foot.kick();
// When the call to console.log() occurs, a beginning JavaScript programmer might expect this.yelp to contain "Ouch!".
//  In fact, it is undefined, because the function we passed to setImmediate got its own this 
// (which by default is the global object, which has no yelp property). In ES5, you might work around this with hacks like:

//     setImmediate(function () {
//         console.log(this.yelp);
//     }.bind(this));

// or even

//     var that = this;
//     setImmediate(function () {
//         console.log(that.yelp);
//     });

// let foot = {
//     kick : function (){
//         this.yelp = "Ouch!";
//         setImmediate(()=> console.log(this.yelp))
//     }
// }
// foot.kick()

let foot = {
    kick : () =>{
            this.yelp = "Ouch!";
            console.trace("trace here");
            setImmediate(()=> console.log(this.yelp))
    }
};
foot.kick();