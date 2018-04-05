/**
 * Created by sandeeptc on 6/7/17.
 */
function ispalindrome(str) {
    var str1=str.split('').reverse().join('');
    if (str1 === str) {
        console.log("The given string is palindrome!!!");
    }
    else {
        console.log("The given string is not palindrome!!!");
    }

}

ispalindrome("madam");
