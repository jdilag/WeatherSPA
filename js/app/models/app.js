define([
    'backbone',
    'backbone.localStorage'
], function(Backbone) {
    'use strict';

    var AppModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("AppSettings"),
        defaults: {
            'backgroundColor': '#FFFFFF',
            'celsius'        : true,
            'welcomeMessage' : 'Simple Weather SPA'
        }
    });

    return AppModel;
});