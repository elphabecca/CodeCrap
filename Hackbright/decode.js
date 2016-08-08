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












