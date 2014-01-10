romanNumeralGenerator = (function() {
	"use strict";
	var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
		values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	function romanNumeralGenerator(num) {
		var numeral = {
				count: num,
				string: ''
			},
			errorMessage = 'Input must be an integer between 1 and 3999.';

		// Throw an error if num is not an integer.
		if (typeof num !== 'number' || num % 1 !== 0) {
			throw new TypeError(errorMessage);
		}

		// Do not support numbers over 3999 or less than 1.
		if (num >= 4000 || num < 1) {
			throw new RangeError(errorMessage);
		}

		// Loop over the values, calculating how many symbols to output.
		for (var i = 0; i < values.length; i++) {
			numeral = calcSymbol(numeral, i, symbols[i-1]);
		}

		return numeral.string;
	}

	function calcSymbol(numeral, i) {
		var value = values[i],
			symbol = symbols[i],
			numOfSymbols;

		// Return early if number is less than value.
		if (numeral.count < value) {
			return numeral;
		}

		// Calculate required number of the current symbol.
		numOfSymbols = Math.floor(numeral.count / value);

		// Write out calculated number of symbols.
		for (var j = 1; j <= numOfSymbols; j++) {
			numeral.string += symbol;
		}
		numeral.count -= numOfSymbols * value;

		return numeral;
	}

	return romanNumeralGenerator;
})();
