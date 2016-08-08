/*for (var p=1;p<=20;p+=1){
    console.log(p,Math.floor(p/7),p%7);
}

for (var p=1;p<=20;p+=1){
    if (p%2===0){console.log(p);}
}*/

/* 1 --> 100, if # div by 3, print "fizz"
If divisble by 5, print buzz
if both, fizz buzz
otherwise, just print # 

for (var k=1;k<=100;k+=1){
    if (k%3===0&&k%5===0){console.log("fizzbuzz");}
    else if (k%3===0){console.log('fizz');}
    else if (k%5===0){console.log('buzz');}
    else {console.log(k);}
} */

for (var k=1;k<=20;k+=1){
    var q='';
    if (k%3===0){q+='fizz'}
    if (k%5===0){q+='buzz'}
    if (q===''){q+=k}
    console.log(q);
}