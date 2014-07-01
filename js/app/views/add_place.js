define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/modal'
], function($, _, Backbone, ModalView) {
    'use strict';

    var AddPlaceView = ModalView.extend({
        html: [
            '<form role="form">',
                '<div class="form-group">',
                    '<label fo="countryCodeInput">Country Code</label>',
                    '<input type="text" class="form-control" id="countryCodeInput" placeholder="Enter Country Code">',
                '</div>',
                '<div class="form-group">',
                    '<label fo="nameInput">Name</label>',
                    '<input type="text" class="form-control" id="nameInput" placeholder="Enter Name">',
                '</div>',
                '<button id="btn-add" class="btn btn-default">Submit</button>',
            '</form>'
        ].join(''),
        events: {
            'click #btn-add': 'addNewPlace'
        },
        addNewPlace: function(e) {
            var place = {
                countryCode: this.$('#countryCodeInput').val(),
                name       : this.$('#nameInput').val()
            };

            this.collection.create(place);
            this.$modalEl.modal('hide');
        },
        initialize: function() {
            ModalView.prototype.initialize.apply(this, arguments);
            this.$bodyEl.html(this.html);
        }
    });

    return AddPlaceView;
});