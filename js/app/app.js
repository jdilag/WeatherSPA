define([
	'app/views/app',
	'app/routers/router',
    'app/models/app'
], function(AppView, Router, AppModel, DaysCollection, PlacesCollection) {
	'use strict';

    var initialize = function() {
        // Initialize Main Model
        var appModel = new AppModel({id: 1});
        appModel.fetch();

        // Initialize Main View
		var appView = new AppView({model: appModel});
		$('body').append(appView.render().el);

        // Initialize Router
		var router = new Router(appView);
		Backbone.history.start();
	};

	return {
		initialize : initialize
	}
});