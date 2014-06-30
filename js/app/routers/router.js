define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			''            : 'goToDash',
			'dash'        : 'goToDash',
			'dash/:place' : 'goToDash',
			'about'       : 'goToAbout'
		},
		goToDash: function(place) {
			this.appView.setPage('dash');

			if (place) {
				alert('Displaying details for this place: ' + place);
			}
		},
		goToAbout: function() {
			this.appView.setPage('about');
		},
		initialize: function(view) {
			this.appView = view;
		}
	});

	return Router;
});