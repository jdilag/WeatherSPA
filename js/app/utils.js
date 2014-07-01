define([
], function() {

	var isNumber = function(n) {
		return typeof n === 'number';		
	}
	
	var celsiusToFahrenheit = function(celsius) {
		if (!isNumber(celsius) || !celsius) return null;

		return celsius * 1.8000 + 32.0;
	};

	return {
		celsiusToFahrenheit: celsiusToFahrenheit 
	}
})