define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var AboutView = Backbone.View.extend({
		render: function() {
			var html = '<h3>About Page</h3>';
			this.$el.html(html);
			return this;
		},
		initialize: function() {}
	});

	return AboutView;
})