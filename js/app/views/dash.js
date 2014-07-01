define([
	'jquery',
	'underscore',
	'backbone',
    'app/collections/places',
    'app/templates'
], function($, _, Backbone, PlacesCollection, Templates) {

	var DashView = Backbone.View.extend({
        html: [
            '<h3>Dashboard page</h3>',
            '<div id="places-list" class="clearfix">Loading...</div>',
            '<div id="dash-buttons"></div>'
        ].join(''),
		render: function() {
            if (this.collection.length) {
                var placesHtml = [];

                this.collection.each(function(element, index, list) {
                    placesHtml.push(Templates['place'](element.toJSON()));
                });

                this.$placesList.html(placesHtml.join(''));
            }
            else {
                this.$placesList.html('Sorry, there are no places to display, please add some!');
            }

			return this;
		},
		initialize: function() {
            this.$el.html(this.html);
            this.$placesList  = this.$('#places-list');
            this.$dashButtons = this.$('#dash-buttons');
            this.collection   = new PlacesCollection([]);
            this.listenTo(this.collection, 'change', this.render);
            this.collection.fetch();

            window.debug = {
                places: this.collection
            }
        }
	});

	return DashView;
});