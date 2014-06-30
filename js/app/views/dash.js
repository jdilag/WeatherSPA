define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var DashView = Backbone.View.extend({
		render: function() {
			var html = '<h3>Dashboard</h3>';
			this.$el.html(html);
			return this;
		},
		initialize: function() {}
	});

	return DashView;
})