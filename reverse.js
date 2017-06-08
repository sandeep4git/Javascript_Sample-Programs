/**
 * Created by sandeeptc on 6/7/17.
 */

reverseString("Hello")
function reverseString() {

    var x = "Hello";
    var y = x.split("");
    var z = y.reverse();
    var xyz = z.join("");
    console.log('Reverse of '+ x +' is '+xyz);
}
