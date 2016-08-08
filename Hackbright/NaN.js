

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


/* console.log(typeof(NaN)); 
function sep(chunk)
{
	var split=(chunk.split("")), num="", letters="";
	for (var i=0; i<split.length; i++)
	{
		if ((isNaN(split[i]))==false)
		{
			num=num+(parseInt(split[i]));
			console.log(num);
		}
		else
		{
			letter=letters+(split[i]);
		}
	}
	console.log(letters);
	return function skip(num,letters)
	{
		return letters.split("")[num];
	}
}
console.log(sep(2abe));

*/








