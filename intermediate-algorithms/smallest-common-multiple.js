function smallestCommons(arr) {

	//sort the passed in array to get min and max
  var sortedInput = arr.sort(function(a, b) {
		return a - b;
	});
  debug("sortedInput = " + sortedInput);

	//generate a range based on the passed in array
	var min = sortedInput[0];
	var max = sortedInput[1];

	var scmArray = Array.from({
		length: max - min + 1
	}, (v, k) => k + min);
	debug("scmArray = " + scmArray);

// 	// function computeDivisibleByAll (min, max, i, j) {
// 	// 	debug("min = " + min);
// 	// 	debug("max = " + max);
// 	// 	var result = min * max;
// 	// 	var i = 1;

// 	// 	while (max / max - i !== 0) {
// 	// 		result += max;
// 	// 		debug("result = " + result);
// 	// 	}
//  //  }
//  //
//  //
// var i = 1;
//     var j = 1;
//     var result = max * (max - 1) ;
// 	debug("result = " + result);
// 	debug("scmArray.length " + scmArray.length);var i = 1;
//     var j = 1;
//     var result = max * (max - 1) ;
// 	debug("result = " + result);
// 	debug("scmArray.length " + scmArray.length);1

//  function calculate (min, max, result) {
// 	while (i < max) {
// 		if ( ((max - i) === min) && (result % (max - i) ===0 )) {
// 				i = 1;
// 				debug("(max - i) = min" + (max - i) === min);
// 				j++;
// 				debug("j = " + j);
// 				debug("boom " + j);
// 		}
// 				// debug("max = " + max + typeof(max));
// 				// debug("i = " + i +typeof(i));
// 				debug( "max - i = " + (max - i));
// 				// debug("result = " + result);
// 				// i++;
// 				if (result % (max - i) !== 0) {
// 					debug("result % (max - i) = " + result / (max - i));
// 		       result += max;
// 		       debug(result);
// 				} else {

// 					if ( (max - i) === min ) {
// 						debug( "(max - i) = min" + (max - i) === min );
// 					}
// 					debug("else result(" +result+ ") % (max - i) = " + result % (max - i));
// 					i++
// 					debug("i = " + i);
// 				}
// 					debug("result = " + result);
// 				// 	i++
// 				// 	debug("max - i = " + max - i);
// 				// 	if (max - i === min) {
// 				// 		j++;
// 				// 	}

// 				// }
// 		  }

// 	// computeDivisibleByAll(sortedInput[0], sortedInput[1]);
// 	  if (j < sortedInput.length) {

// 	  } else {
// 		  return arr;
// 		}
// 	}
// sortedInput(arr);
}

smallestCommons([23, 18]);
