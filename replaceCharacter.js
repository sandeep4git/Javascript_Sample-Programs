/**
 * Created by sandeeptc on 6/7/17.
 */

function replaceCharacter(x,y,z){

    var str = x.toLowerCase().split("");
    var temp=[];
    for (i = 0; i < str.length; i++) {
        if (str[i] === y) {
            temp.push(z);
        }
        else{
            temp.push(str[i]);
        }
    }
    console.log(temp.join(""));
}

replaceCharacter("sandeep","e","i");
