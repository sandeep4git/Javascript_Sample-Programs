function anagrams(a,b) {
    var word1 = a.toLowerCase().split('').sort().join('');
    var word2 = b.toLowerCase().split('').sort().join('');
    if (word1.length===word2.length)
    {
        if (word1 === word2) {
            console.log('Anagrams!');
        }
    }
    else {
        console.log('Not Anagrams!');
    }
}
anagrams("Debit card","Bad credit");
