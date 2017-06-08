/**
 * Created by sandeeptc on 6/7/17.
 */

function reverseString(str){
    if(str===""){
        return "";
    }
    else{
        return reverseString(str.substr(1))+str.charAt(0);
    }
}

stringRev=reverseString("Hello!");

console.log('The Reversal of the given string is:'+ stringRev);
