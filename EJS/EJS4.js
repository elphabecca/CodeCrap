/* var person = {
	firstName:"John",
	lastName:"Doe",
	age:50,
	eyeColor:"blue",
	fullName:function()
	{
		return this.firstName + " " + this.lastName;
	}
};
console.log(person["lastName"]);
*/

/*
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
*/

/*
var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true},


var journal = [];
*/
/*
function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

76 - No squirrel, no pizza
9 - No squirrel, yes pizza
4 - Yes squirrel, no pizza
1 - Yes squirrel, yes pizza


var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

console.log(JOURNAL.length)
*/

/*
var todoList = [];
function rememberTo(task){
	todoList.push(task);
}
function whatIsNext(){
	return todoList.shift();
}
rememberTo("eat");
rememberTo("sleep");
console.log(whatIsNext());
console.log(todoList);
*/

/*
function remove(array, index) {
  return array.slice(0, index)
  	.concat(array.slice(index+1));
  }
 console.log(remove(["a", "b", "c", "d", "e"], 1));

The indexOf method has a sibling called lastIndexOf, 
which starts searching for the given element at the 
end of the array instead of the front.
*/

/*

*The sum of a range*

The introduction of this book alluded to the following as a 
nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start 
up to (and including) end.

Next, write a sum function that takes an array of numbers and 
returns the sum of these numbers. Run the previous program and 
see whether it does indeed return 55.

--------------------------------------------------

As a bonus assignment, modify your range function to take an 
optional third argument that indicates the “step” value used 
to build up the array. If no step is given, the array elements 
go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 

Make sure it also works with negative step values so that 
range(5, 2, -1) produces [5, 4, 3, 2].

*/


function range(start, end, step) {
	var range={array: []}
 /* if (step===undefined && start<end){
    step=1;
  }
  else if (step===undefined && start>end){
    step=-1;
  } */
  step=step||(start<end?1:-1);
  if (step<0){
	 for (var i=start; i>=end; i+=step)
		  range.array.push(i);
  }
  else{
    for (var i=start; i<=end; i+=step)
      range.array.push(i);
  }
	return range.array;
	}

//console.log(range(5,2,-2));

function sum(array) {
	var sum=0
	for (var i=array[0]; i<=(array[array.length-1]); i++)
		sum+=i;
	return(sum);
}

/*
for (var i=1; i<=10; i++){
	console.log(i);
}
*/


/*
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order 
in which its elements appear. For this exercise, write two functions, 
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an 
array as argument and produces a new array that has the same elements in the 
inverse order. The second, reverseArrayInPlace, does what the reverse method 
does: it modifies the array given as argument in order to reverse its elements. 
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the 
previous chapter, which variant do you expect to be useful in more situations? 
Which one is more efficient?

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/


function reverseArray(input){
  var newArray=[];
  for (var i=input.length-1; i>=0; i--)
    newArray.push(input[i])
  return newArray;
}

//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(moarInput){
  for (var i=0; i<=moarInput.length/2; i++){
    var temp=moarInput[i];
    moarInput[i]=moarInput[moarInput.length-1-i];
    moarInput[moarInput.length-1-i]=temp;
  }
  return moarInput;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));

/*
A list

Objects, as generic blobs of values, can be used to build all sorts of data 
structures. A common data structure is the list (not to be confused with the 
array). A list is a nested set of objects, with the first object holding a 
reference to the second, the second to the third, and so on.

The resulting objects form a chain, like this:

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

A nice thing about lists is that they can share parts of their structure. For 
example, if I create two new values {value: 0, rest: list} and 
{value: -1, rest: list} (with list referring to the variable defined earlier), 
they are both independent lists, but they share the structure that makes up 
their last three elements. In addition, the original list is also still a 
valid three-element list.

Write a function arrayToList that builds up a data structure like the previous 
one when given [1, 2, 3] as argument, and write a listToArray function that 
produces an array from a list. Also write the helper functions prepend, which 
takes an element and a list and creates a new list that adds the element to the 
front of the input list, and nth, which takes a list and a number and returns 
the element at the given position in the list, or undefined when there is no 
such element.

If you haven’t already, also write a recursive version of nth.

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

function arrayToList(sexyArray){
  var head={value: sexyArray[0], next: null}, 
      curr=head;
  for (var i=1; i<sexyArray.length; i++){
    var oblong={value: sexyArray[i], next: null};
    curr.next=oblong;
    curr=curr.next;
  }
  return head;
}

function printMahList(head){
  var curr = head;
  while (curr !== null){
    console.log(curr.value);
    curr = curr.next;
  }

}

console.log(arrayToList(['T','A','C','O']));

/*
Deep comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/

//codecodecode













