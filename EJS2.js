
var size=8, space=' ', hash='#', answer=''
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

/*
var length=8, space=' ', hash='#', answer=''
for (var character=1; character<=length; character++)
{
	if (character%2!==0)
	{
		answer=answer+space
	}
	else
	{
		answer=answer+hash
	}
}
console.log(answer);



var a=0
for (var c=1;c<=5;c++){
a=(c+a);
console.log(a);
} */