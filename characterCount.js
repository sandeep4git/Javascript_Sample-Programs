/**
 * Created by sandeeptc on 6/7/17.
 */

function charcterCount(x,y) {
    var count = 0;
    var str = x.toLowerCase().split("");
    for (i = 0; i < str.length; i++) {
        if (str[i] === y) {
            count = count + 1;
        }
    }
    console.log("Number of Occurances "+count);

}

charcterCount("Invisibility is the cause of Road Accidents","i");
