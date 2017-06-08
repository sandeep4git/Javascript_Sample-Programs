/**
 * Created by sandeeptc on 6/7/17.
 */

function ispalindrome(x) {

    var a = x;
    var b = a.split("");
    var c = b.reverse().join("");
    console.log(c);

    if (a === c) {
        console.log("The given string is palindrome!!!");
    }
    else {
        console.log("The given string is not palindrome!!!");
    }

}

ispalindrome("madam");
