define([
	'jquery',
	'underscore',
	'backbone',
    'app/collections/places',
    'app/views/place',
    'app/views/add_place'
], function($, _, Backbone, PlacesCollection, PlaceView, AddPlaceView) {

	var DashView = Backbone.View.extend({
        html: [
            '<h3>Dashboard page</h3>',
            '<div id="places-list" class="clearfix">Loading...</div>',
            '<div id="dash-buttons">',
                '<button id="btn-add-new" type="button" class="btn btn-default">Add New</button>',
            '</div>'
        ].join(''),
        events: {
            'click #btn-add-new': 'addNewPlace'
        },
        views: [],
		render: function() {
            var self = this;

            this.cleanUp();

            if (this.collection.length) {
                this.collection.each(function(element, index, list) {
                    var place = new PlaceView({
                        model: element,
                        id   : [
                            'place-',
                            element.get('countryCode'),
                            '-',
                            element.get('name')
                        ].join('')
                    });

                    self.$placesList.append(place.render().el);
                    self.views.push(place);
                });
            }
            else {
                this.$placesList.html('Sorry, there are no places to display, please add some!');
            }

			return this;
		},
        cleanUp: function() {
            for (var i = 0; i < this.views.length; i++) {
                this.views[i].remove();
            }
            this.views.length = 0;
            this.$placesList.html('');
        },
        addNewPlace: function(e) {
            var modal = new AddPlaceView({
                title     : 'Add a new place',
                id        : 'modal-add-new-place',
                collection: this.collection
            });

            modal.show();
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