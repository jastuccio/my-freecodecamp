function sumFibs(num) {
	var a = 1,
		b = 0,
		temp = 0,
		oddFibonaccis = [];


	while (temp <= num) {

		if (temp % 2 !== 0) {
			oddFibonaccis.push(temp);
			debug(oddFibonaccis);
		}

		// debug("a = " + a);
		// debug("b = " + b);
		//  debug("temp = " + temp);
		//  debug("num = " + num);
		temp = a;
		a = a + b;
		b = temp;
	}

	var result = oddFibonaccis.reduce(function(a, b) {
		return a + b;
	}, 0);

	debug("result = " + result);
	return result;
}

sumFibs(1000);
