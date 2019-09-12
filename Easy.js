// Slice of Pie
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// 1. Total number of slices.
// 2. Number of recipients.
// 3. How many slices each person gets.

const equalSlices = (total, people, each) => {
	if (people * each <= total || people === 0 )  {
		return true;
	} else {
		return false;
	}
}