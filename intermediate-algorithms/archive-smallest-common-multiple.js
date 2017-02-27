function smallestCommons(arr) {
	//sort the passed in array to get min and max
	var sortedInput = arr.sort(function(a, b) {
		return a - b
	});
	debug("sortedInput = " + sortedInput);

	//generate a range based on the passed in array
	var min = sortedInput[0],
		max = sortedInput[1];

		debug("min = " + min);
		debug("max = " + max);

	scmArray = Array.from({
		length: max - min + 1
	}, (v, k) => k + min);
	debug("scmArray = " + scmArray);

	var i = 1;
	debug("max number(" + max +") - 1 = " + scmArray[scmArray.length - (i + 1)]);
	var result = max * (max - 1) ;
	debug("result = " + result);
	debug("scmArray.length " + scmArray.length);

	while (scmArray.length - i > 0) {
		debug(result + " % " + scmArray[scmArray.length - (i + 1)]);
		// debug("WT is this value = " + scmArray[scmArray.length - (i + 1)])
		//
		//
		debug("WTF is this value = " + max - i);
		// if (result % max - i !== 0) {
		if (result % scmArray[scmArray.length - (i + 1)] !== 0) {
			debug("max - i = " + max - i)
      result += max;
			debug("result increases to " + result);
		} else {
			i++
			// debug("i increases to " + i);
		}
	}

	return arr;
}

smallestCommons([23, 18]);
