var sentence = 'its a small world'

var words = sentence.split(" ")//.join("a");

// console.log(words[0] + "a" + words[1] + "a" + words[2])

var allWords = [];

for(var i = 0; i<words.length; i++){

allWords.push(words[i][0].toUpperCase().concat(words[i].slice(1))) 

}

console.log(allWords)

var allTogether = allWords.join(" ")
console.log(allTogether)

// console.log(words)

// consol e.log(sentence.length)

// console.log(sentence.slice(1,3))

// var str = str.toUpperCase()
