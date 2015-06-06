function letterCapitalize (sentence) {

	var words = sentence.split(" ")

	var allWords = [];

	for(var i = 0; i<words.length; i++){

	   allWords.push(words[i][0].toUpperCase().concat(words[i].slice(1))) 

	}

	var allTogether = allWords.join(" ")

	return allTogether;

}

console.log (letterCapitalize("its a small world"));

