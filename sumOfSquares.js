//given a list of integers, find the sum of squares of those integers.
//eg:
// sumOfSquares([1,2,3])
// => 14

function sumOfSquares (numbers) {

	var multiplier = 0;
    
	for (var i = 0; i < numbers.length; i++) {

		multiplier += (numbers[i]*numbers[i]);

	}

	return multiplier;
}

console.log(sumOfSquares([1,2,3,4,5,6,7]));

