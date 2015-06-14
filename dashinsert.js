function dashInsert (count){

var string = count.toString();

var output = "";


for (var i = 0; i < string.length; i++) {
        output += string[i];
	if (string[i] % 2 != 0)
		output += "-";
};

return output;

}

console.log(dashInsert(70982));


