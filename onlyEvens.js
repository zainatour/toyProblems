// write a function, onlyEvens, that accepts an array of numbers and returns a
// new array containing only the even elements of the input array
// eg:
// onlyEvens([1,2,3,4,8,7,6,5])
// => [2,4,8,6]

function onlyEvens (list) {

	var i = 0;
	var evens = []
  
    while (i < list.length) {
    	if(list[i]%2 === 0) {
    		evens.push(list[i]);
    	} 	
    	i++
    }

    return evens;
}

console.log(onlyEvens([1,2,3,4,5,6,7,8,9,11,12,14,16,14,15,16]))
