function dashInsert (count){

var string = count.toString();

var output = "";


for (var i = 0; i < string.length; i++) {
	if (string[i] % 2 != 0)
		output = output + (string[i].concat("-"))
	else output = output + (string[i])
};

return output;

}


