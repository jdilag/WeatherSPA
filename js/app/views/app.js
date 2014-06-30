define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/counter'
], function($, _, Backbone, CounterView) {
	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',
		html: [
			'<div class="navbar">',
				'<a class="navbar-brand" href="#">Weather App</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#">Dashboard</a></li>',
					'<li id="nav-about"><a href="#">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'
		].join(''),
		events: {
			'click #nav-dash' : 'onNavDash',
			'click #nav-about': 'onNavAbout'
		},
		views: {},
		onNavDash: function(e) {
			alert('dash button clicked');
		},
		onNavAbout: function(e) {
			alert('about button clicked');
		},
		initialize: function() {
			this.views['counter'] = new CounterView({
				id: 'counter-widget',
				className: 'counter-widget'
			});

			this.$el.append(this.html);
			this.$('#content').append(this.views['counter'].render().el);
		}
	});

	return AppView;
});