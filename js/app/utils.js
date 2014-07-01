define([
], function() {

	var isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);		
	}
	
	var celsiusToFahrenheit = function(celsius) {
		if (!isNumber(celsius) || !celsius) return null;

		return celsius * 9 / 5 + 32.0;
	};

	return {
		celsiusToFahrenheit: celsiusToFahrenheit 
	}
})