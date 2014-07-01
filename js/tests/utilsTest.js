define([
	'app/utils'
], function(Utils) {
	'use strict';

	function run() {
		test('Test celsius to fahrenheit', function() {
			strictEqual(Utils.celsiusToFahrenheit(32), 89.6, 'Test a number');
			strictEqual(Utils.celsiusToFahrenheit('hot'), null, 'Test a string');
			strictEqual(Utils.celsiusToFahrenheit(), null, 'Test undefined');
		});
	}

	return {
		run: run
	}
});