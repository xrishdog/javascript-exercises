const reverseString = function(string) {
	let stringArr = string.split("");
	let newStr = "";

	for (let i = stringArr.length -1; i >=0; i--){
		newStr += stringArr[i];
	}

	return newStr;
};

// Do not edit below this line
module.exports = reverseString;
