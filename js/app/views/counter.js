define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var CounterView = Backbone.View.extend({
		count: 0,
		events: {
			'click span': 'addToCounter',
			'click strong': 'removeView'
		},
		addToCounter: function(e) {
			this.count++;
			this.render();
		},
		removeView: function(e) {
			this.remove();
		},
		render: function() {
			var html = '<h3>This view has been <span>clicked</span> ' + this.count + ' times</h3><strong>Remove</strong>';
			this.$el.html(html);
			return this;
		},
		initialize: function() {}
	});

	return CounterView;
})