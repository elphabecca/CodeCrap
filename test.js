//console.log(Math.max(5))
//console.log(Math.max(7));

//alert("Who's your daddy?");

/* var Z = 7
if isNaN(Z)
	console.log("Yeah!"); */

/* var e = 0
for (var e=0; e<20;e++);
	if (e%2===0)
		console.log(e); */

/* var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
} */

/* var a = '#';
for (var b = 0; b<8 ; b++,a=a+)
console.log(b,a); */

/* var a = '#';
for (var b = 1; b <= 7; b++, a = a + '#')
console.log(a); */

/* var f="Fizz", b="Buzz"
for (var a = 1; a <=100; a++) {
	if (a%3==0 && a%5==0)
		console.log(f+b);
	if (a%3==0)
		console.log(f);
	if (a%5==0)
		console.log(b);
	else console.log(a)}; */

/* var f="Fizz", b="Buzz"
for (var a = 1; a <=100; a++) {
	if (a%3==0 && a%5==0)
		console.log(f+b);
	else if (a%3==0)
		console.log(f);
	else if (a%5==0)
		console.log(b);
	else console.log(a)};

*/
/*
var size=16, space=' ', hash='#', answer=''
for (var line=1; line<=size; line++)
{
	if (line%2!==0)
	{
		for (var character=1; character<=size; character++)
		{
			if (character%2!==0)
			{
				answer=answer+space;
			}
			else
			{
				answer=answer+hash;
			}
		}
	answer=answer+'\n'}
	if (line%2==0)
	{
		for (var character=1; character<=size; character++)
		{
			if (character%2!==0)
			{
				answer=answer+hash;
			}
			else
			{
				answer=answer+space;
			}
		}
	answer=answer+'\n'}
}
console.log(answer);

*/
/* 

var a=0
for (var c=1;c<=5;c++){
a=(c+a);
console.log(a);
}

var size=8, a='#', b=' ', c=1, unit = (a+b)
while (c<=(size+1)) {
	console.log(unit);
	c=c+1;
	} 


var abc = 'abc';
console.log(abc.length);
//--> 3 */

/* var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10)); 

var mood="light";
{
	var mood="dark";
}
console.log(mood);



function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));




Coding Challenge
Decrypt string

Here’s a simple strategy to encode a message: 
before each letter of the message, add a number and series of letters. 
The number should correspond to the number of letters that will precede the 
message's actual, meaningful letter.

For example, the word “hey” could be coded with “0h2abe1zy”. To read the message, 
you would:

skip 0, find the ‘h’
skip 2 (‘a’ and ‘b’), find ‘e’
skip 1 (‘z’), find ‘y’
Write a function called “decode”, which takes a string in this code format and 
returns the decoded word. You may assume that coded strings are always legally 
encoded with this system.




var original = "2abe", split=(original.split("")), num="", letters="";
for (var i=0; i<split.length; i++)
{
	if (typeof parseInt(split[i]) == "number")
	{
		num=num+(parseInt(split[i]));
		console.log(num);
	}
	else if (typeof parseInt(split[i]) == "NaN")
	{
		letters=letters+(split[i]);
		console.log(letters);
	}
}
console.log(typeof)

console.log(!isNaN("0"));



function min(v1,v2)
{
	if (v1<v2)
	{
		return v1;
	}
	else return v2;
}

console.log(min(0, -10));

*/

/*
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

The function calls itself multiple times with different arguments to achieve the repeated multiplication.

// fxn should accept a number and return a Boolean (t/f)
//zero is even, one is odd, for any other # N, eveness is the same as N-2

function isEven(input)
{
	if (input==0)
		return true;
	else if (input==1)
		return false;
	else
	{
		return isEven(Math.abs(input-2));
	}
}
console.log(isEven(-10));

*/

/*
Bean Counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N),
similar to how you get its length with "s".length. The returned value will be a string
containing only one character (for example, "b"). The first character has position zero,
which causes the last one to be found at position string.length - 1. In other words,
a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that 
indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second 
argument that indicates the character that is to be counted (rather than counting only 
uppercase “B” characters). Rewrite countBs to make use of this new function.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

Hints:
A loop in your function will have to look at every character in the string by running an index 
from zero to one below its length (< string.length). If the character at the current position is 
the same as the one the function is looking for, it adds 1 to a counter variable. Once the loop
has finished, the counter can be returned.

Take care to make all the variables used in the function local to the function by using the var keyword.
*/


function countBs(string)
{
	return countChar(string, "B");
}
console.log(countBs("BulBous BouFFant BluBBER"));

/*
function countBs(string)
{
	for (c=0; c<string.length; c++)
		if (string.charAt(c)==="B")
				count+=1;
	return count+=1;
}
console.log(countBs("BulBous BouFFant BluBBER"));
*/
function countChar(string, char)
{
	var count=0;
	for (c=0; c<string.length; c++)
		if (string.charAt(c)===char)
				count+=1;
	return count;
}




















