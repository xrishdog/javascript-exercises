const removeFromArray = function() {
	const args = Array.from(arguments);

	let mainArr = args[0];
	let newArr = mainArr;


	for (let i = 1; i < args.length ; i ++){

		newArr = newArr.filter(item => item !== args[i]);
		//console.log(newArr);
	}
	return newArr


};

// Do not edit below this line
module.exports = removeFromArray;
