define([
    'jquery',
    'underscore',
    'backbone',
    'app/templates',
    'app/collections/days'
], function($, _, Backbone, Templates, DaysCollection) {
    'use strict';

    var PlaceView = Backbone.View.extend({
        template  : Templates['place'],
        collection: new DaysCollection([]),
        render    : function() {
            var self = this;

            this.collection.url = [
                'http://api.wunderground.com/api/',
                '6968a6a83b1ac581', //place personal key here
                '/forecast/q/',
                this.model.get('countryCode'),
                '/',
                this.model.get('name'),
                '.json'
            ].join('');

            this.collection.fetch({
                success: function(collection, response, options) {
                    self.renderDays();
                },
                error: function(collection, response, options) {
                    console.log('error');
                }
            });

            return this;
        },
        renderDays: function() {
            var daysHtml = [];
            this.collection.each(function(element, index, list) {
                daysHtml.push(
                    Templates['day'](element.toJSON())
                );
            });
            this.$bodyEl.html(daysHtml.join(''));
        },
        initialize: function() {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            this.$bodyEl = this.$('.panel-body');
        }
    });

    return PlaceView;
})