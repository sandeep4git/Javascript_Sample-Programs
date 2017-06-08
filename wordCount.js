/**
 * Created by sandeeptc on 6/7/17.
 */

wordCount("I live at San Jose");

function wordCount(str) {
    var str = str;

    var str1 = str.split(" ");

    console.log(str1.length);

    for (i = 0; i < str1.length; i++) {
        console.log(str1[i]);
    }
}

