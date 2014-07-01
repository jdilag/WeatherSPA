define([
    'backbone'
], function(Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        defaults: {
            'backgroundColor': '#999999',
            'celsius'        : true,
            'welcomeMessage' : 'Simple Weather SPA'
        }
    });

    return AppModel;
});