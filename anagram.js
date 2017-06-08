/**
 * Created by sandeeptc on 6/7/17.
 */

function anagrams(a,b) {
    var word = a;
    var wordSplit = word.toLowerCase().split('');
    var wordSorted = wordSplit.sort().join("");

    var word2 = b;
    var word2Split = word2.toLowerCase().split('');
    var word2Sorted = word2Split.sort().join("");

    // console.log(wordSorted);
    // console.log(word2Sorted);
    if (wordSorted.length===word2Sorted.length)
    {
        if (wordSorted === word2Sorted) {
            console.log('Anagrams!');
        }
    }

    else {
        console.log('Not Anagrams!');
    }
}
anagrams("Debit card","Bad credit");
