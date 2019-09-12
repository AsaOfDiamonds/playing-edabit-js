//Create a function that finds the index of a given item.
// If the item is not present, return -1.

function search(arr, item) {
	return arr.indexOf(item);
}

//alt answers
// function search(arr, item) {
// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i] === item) return i;
// 	}
// 	return -1;
// }

// ******************************************************************************* //

// Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

const concatName = (firstName, lastName) => {
	let str1 = `${lastName}, `;
	let str2 = firstName
	return str1.concat(str2);
}

// alt answers
// function concatName(firstName, lastName) {
//	return `${lastName}, ${firstName}`;
// }

// ******************************************************************************* // 

// Name Greeting!
// Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".
// The input is always a name (as string).
// Don't forget the exclamation mark!

const helloName = name => {
	return `Hello ${name}!`;
}

// const helloName = name => `Hello ${name}!`;

// ******************************************************************************* // 

// Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
	if ( num % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
}

// alt answers
// function isEvenOrOdd(num) {
//  return num % 2 ? 'odd' : 'even';
// }

// const isEvenOrOdd = num => (num % 2) === 0 ? 'even' : 'odd';

// ******************************************************************************* // 

// Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

const cityFacts = (city) => {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

// ******************************************************************************* // 

// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

const hasSpaces = (str) => {
	if (str.includes(' ')) {
		return true;
	} else {
		return false;
	}
}

// alt answers
// const hasSpaces = str => str.includes(" ");

// ******************************************************************************* // 

// Volume of a Box
// Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.
// Remember that the values are in an object.

const volumeOfBox = (sizes) => {
	return sizes.width * sizes.length * sizes.height;
}

// alt answers
// const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;

// ******************************************************************************* // 

// Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

const isPlural = (word) => {
	for (let i = 0; i < word.length; i++ ) {
		if (word[word.length -1] === 's') {
			return true;
		} else {
			return false;
		}
	}
}

// alt answers
// function isPlural(word) {
//	return word.endsWith("s");
// }

// function isPlural(word) {
//	return word[word.length - 1] == 's';
// }

// ******************************************************************************* // 

// String or Integer?
// Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

const intOrString = (param)=> {
	return (isNaN(param) === true) ? 'str' : 'int';	
}

// alt answers
// const intOrString = (param) => typeof param === "string" ? "str" : "int"

// ******************************************************************************* // 

// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function check(arr, el) {
	return arr.includes(el) === true ? true : false;
}

// alt answers
// function check(arr, el) {
//	return arr.includes(el)
// }

// const check = (arr, el) => arr.includes(el)

// ******************************************************************************* // 

// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

const getLastItem = (arr) => {
	return arr.pop();
}

// alt answers
// function getLastItem(arr) {
//  return arr[arr.length - 1]
// }

// ******************************************************************************* // 
// Find the Index (Part 2)
// Create a function that finds the index of a given item if the array is sorted.

function search(arr, item) {	
	return arr.indexOf(item);
}

// alt answers
// const search = (arr, num) => arr.indexOf(num);
