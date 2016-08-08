/*
CODING Challenge - Decrypt string

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
*/

function decode(string)
{
	var stringArray=string.split(""), decoded="";
	for (i=0; i<string.length; i++)
	{
		function isNumber(i)
		{
			if (isNaN(i)==false)
				return true
			else
				return false
		}
		function returnNumber(input)
		{
			return(parseInt(input));
		}
		function returnLetters(parseNum,index)
		{
			var letters="", indexPlus=(index+1);
			do
				{
					letters+=stringArray[(indexPlus)]
					indexPlus+=1
				} 
			while (indexPlus<=parseNum+(index+1))
			return letters;
		}
		function skip(num,letters)
		{
			return letters.split("")[num];
		}
		if (isNumber(stringArray[i])==true)
		{
			var parseNum=(returnNumber(stringArray[i])), letterChunk=returnLetters(parseNum,i), trueLetter=skip(parseNum,letterChunk);
			i+=(letterChunk.length);
			decoded+=trueLetter;
		}
		else
		{
			console.log("Whoops! I was expecting a number; please re-check your message.")
		}
	}
	return (decoded)
}
console.log(decode("0Tt1/h2 Ka0n7ytGse kk3u?i 1dy2aso6jk dvgu1z,3are 9Rj iDwdQcP0a1 u2lol3keR!"));

// 0Tt1/h2 Ka0n7ytGse kk3u?i 1dy2aso6jk dvgu1z,3are 9Rj iDwdQcP0a1 u2lol3keR!
//--> Thank you, Paul!

/*
------------------------------------------------

//NOTES LEADING UP TO FINAL SOLUTION:

/*
function decode(string)
{
	var stringArray=string.split(""), decoded="";
	for (i=0; i<string.length; i++)
	{
		if (isNumber(stringArray[i])==true)
		{
			var parseNum=(returnNumber(stringArray[i]));
			var letterChunk=returnLetters(parseNum,i);
			var trueLetter=skip(parseNum,letterChunk);
				i+=(letterChunk.length);
				decoded+=trueLetter;
		}
		else
		{
			console.log("Please make sure your entry begins with a number.")
		}
	}
	return console.log(decoded);
}
console.log(decode("0h2abe1zy"));
*/

/*
var string="0h2abe1zy", stringArray=string.split(""), decoded="";
for (i=0; i<string.length; i++)
{
	if (isNumber(stringArray[i])==true)
	{
		var parseNum=(returnNumber(stringArray[i])), letterChunk=returnLetters(parseNum,i), trueLetter=skip(parseNum,letterChunk);
		i+=(letterChunk.length);
		decoded+=trueLetter;
	}
	else
	{
		console.log("Please make sure your entry begins with a number.")
	}
}
console.log(decoded)

------------------------------------------------------

//NESTED FUNCTIONS - VIMPT

function array(string)
{
	var stringArray=string.split("");
	return stringArray;
}

function isNumber(i)
{
	if (isNaN(i)==false)
		return true
	else
		return false
}

function returnNumber(input)
{
	return(parseInt(input));
}

function returnLetters(parseNum,index)
	{
		var letters="", indexPlus=(index+1);
		do
			{
				letters+=stringArray[(indexPlus)]
				indexPlus+=1
			} 
		while (indexPlus<=parseNum+(index+1))
		return letters;
	}

function skip(num,letters)
{
	return letters.split("")[num];
}

/*
------------------------------------

//this takes a "chunk" of the string and splits it into num and letters for SKIP
//THIS IS SEPAR

function separ(chunk)
{
	var sepa=(chunk.split("")), num="", letters="";
	for (var i=0; i<sepa.length; i++)
		{
		if ((isNaN(sepa[i]))==false)
			{
			num+=(parseInt(sepa[i]));
			}
		else
			{
			letters+=(sepa[i]);
			}
		}
	function skip(num, letters)
	{
		return letters.split("")[num];
	}
	return (skip(num,letters));
}
console.log(separ("2abe")); 

------------------------------------

// this takes num and letters and spits out the needed "code" letter
// THIS IS SKIP

function skip(num,letters)
{
	return letters.split("")[num];
}
console.log(skip(2,"abe"));

-------------------------------------

//this takes "original" and splits it into num and letters
//THIS IS SEP 

var original = "2abe", split=(original.split("")), num="", letters="";
for (var i=0; i<split.length; i++)
{
	if ((isNaN(split[i]))==false)
	{
		num=num+(parseInt(split[i]));
		console.log(num);
	}
	else
	{
		letters=letters+(split[i]);
	}
}
console.log(letters);

-------------------------------------

//this function takes an array and spits out a number value 
//(instead of the string value it had as part of the array)
// THIS IS RETURNNUMBER

function returnNumber(input)
{
	if (isNaN(input)==false)
		return(parseInt(input));
	else
		return input;
}

------------------------------------

// This is the combo of code and RETURNNUMBER that first worked.

var string="0h2abe1zy", stringArray=string.split("");
for (i=0; i<string.length; i++)
{
	var stringParse=returnNumber(stringArray[i]);
	console.log(stringParse);
	{
		if (typeof)
	}
}

function returnNumber(input)
{
	if (isNaN(input)==false)
		return(parseInt(input));
	else
		return input;
}

------------------------------------

// This is as close as I've gotten to a solution.  Returns:
// 0 0 '0h'
// 2 2 '2a'
// 6 6 '1z'

var string="0h2abe1zy", stringArray=string.split("");
for (var i=0; i<string.length; i++)
{
	if (isNaN(stringArray[i])==false)
	{
		var chunk="", num="", letters="";
		num+=(parseInt(stringArray[i]));
		for (c=(i+1); c>i; c--)
		{
			letters+=stringArray[c];
		}		
		chunk+=num+letters
		i=c;
		console.log(i, c, chunk);
	}	
}

------------------------------------

var string="0h2abe1zy", stringArray=string.split("");
for (var i=0; i<string.length; i++)
{
	if (isNaN(stringArray[i])==false)
	{
		var num=(parseInt(stringArray[i])) 
//while this was really appealing at first, it would't help if there were two numbers of the same type in a row.
	}
	console.log(i, num, stringArray[i]);
}

-----------------------------------

// THIS IS RETURNLETTERS
// This fxn takes a number value and returns the "chunk" of letters associated

parseNum,	index, 	array want,		c, 		parseNum+index+1	indexPlus
0, 			0		(want [1]), 	c=0, 	1					1
2, 			2 		(want [4,5,6]), c=2,1,0	6					4
1, 			6 		(want [8,9]), 	c=1,0	9					8


var string="0h2abe1zy", stringArray=string.split("");
//for (i=0; i<string.length; i++)
{
	function returnLetters(parseNum,index)
	{
		var letters="", indexPlus=(index+1);
		do
			{
				letters+=stringArray[(indexPlus)]
				indexPlus+=1
			} 
		while (indexPlus<=parseNum+(index+1))
		return letters;
	}
}
console.log(returnLetters(1,6));

*/


























