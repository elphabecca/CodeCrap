//Largest palindrome product (Problem 4)

//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

var z=0
for (var l='0';l<'3';l++){
    var isDone=false;
    for (var m='0';m<'3';m++){
        for (var n='0';n<'3';n++){
            z=(l+m+n);
                console.log(z);
        }
    }
}