/**
 * Created by sandeeptc on 6/7/17.
 */

function vowelsCount(x){

    var str=x.toLocaleLowerCase();
    var vowelsCount=0;
    var constCount=0;
    var temp=[];
    var y=str.split("");
    for(i=0;i<str.length;i++){
        if(y[i]=='a' || y[i]=='e' || y[i]=='i' || y[i]=='o'|| y[i]=='u')
        {
            vowelsCount=vowelsCount+1;

        }
        else{
            temp.push(y[i]);
            constCount=constCount+1;
        }
    }
    console.log('Number of vowels count:'+vowelsCount);
    console.log('Number of Consonants count:'+constCount);
    console.log('String without the Vowels:'+temp.join(""));
}

vowelsCount("sandeep");
