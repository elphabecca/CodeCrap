//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?


var p=600851475143
for (var m=3; m<(p-1);m++){
    var isPrime=true;
    var n=m;
    var d=0;
    for (var f=2;f<n;f+=1){
        d=(n/f);
        if (n%f===0){
            isPrime=false;    
        }
    }
    if (isPrime===true){
        var c=(p/n);
        if (p%n===0){
        console.log(Math.max(n)); 
        } 
    }
    
}