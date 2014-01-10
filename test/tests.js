test('Basic Numbers', function() {
	equal(romanNumeralGenerator(1), 'I');
	equal(romanNumeralGenerator(5), 'V');
	equal(romanNumeralGenerator(10), 'X');
	equal(romanNumeralGenerator(50), 'L');
	equal(romanNumeralGenerator(100), 'C');
	equal(romanNumeralGenerator(500), 'D');
	equal(romanNumeralGenerator(1000), 'M');
});

test('Multiples', function() {
	equal(romanNumeralGenerator(2), 'II');
	equal(romanNumeralGenerator(3), 'III');
	equal(romanNumeralGenerator(20), 'XX');
	equal(romanNumeralGenerator(102), 'CII');
	equal(romanNumeralGenerator(783), 'DCCLXXXIII');
	equal(romanNumeralGenerator(400), 'CD');
	equal(romanNumeralGenerator(3000), 'MMM');
});


test('Subtractive Notation', function() {
	equal(romanNumeralGenerator(4), 'IV');
	equal(romanNumeralGenerator(9), 'IX');
	equal(romanNumeralGenerator(39), 'XXXIX');
	equal(romanNumeralGenerator(1983), 'MCMLXXXIII');
	equal(romanNumeralGenerator(2014), 'MMXIV');
	equal(romanNumeralGenerator(3439), 'MMMCDXXXIX');
	equal(romanNumeralGenerator(3999), 'MMMCMXCIX');
});

test('Error Handling', function() {
	var errorMessage = 'Input must be an integer between 1 and 3999.';

	throws(function() {
		romanNumeralGenerator(0)
	}, RangeError);
	throws(function() {
		romanNumeralGenerator(4000)
	}, RangeError);
	throws(function() {
		romanNumeralGenerator(-23)
	}, RangeError);

	throws(function() {
		romanNumeralGenerator('')
	}, TypeError);
	throws(function() {
		romanNumeralGenerator(NaN)
	}, TypeError);
	throws(function() {
		romanNumeralGenerator(23.32512)
	}, TypeError);
});
