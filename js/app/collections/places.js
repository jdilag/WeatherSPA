define([
    'app/models/place',
    'backbone',
    'backbone.localStorage'
], function(PlaceModel, Backbone) {
    'use strict';

    var PlacesCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('Places'),
        model       : PlaceModel
    });

    return PlacesCollection;
});