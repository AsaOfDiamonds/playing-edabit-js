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

