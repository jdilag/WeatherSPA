define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/modal',
    'app/templates'
], function($, _, Backbone, ModalView, Templates) {
    'use strict';

    var SettingsView = ModalView.extend({
        template: Templates['settings'],
        events: {
            'click #btn-save': 'saveSettings'
        },
        saveSettings: function() {
            var data = {
                welcomeMessage : this.$('#welcomeMessageInput').val(),
                backgroundColor: this.$('#backgroundColorInput').val(),
                celsius        : this.$('#tempType').val() == 'cel'
            };

            this.model.save(data);
            this.$modalEl.modal('hide');
        },
        initialize: function() {
            ModalView.prototype.initialize.apply(this, arguments);
            this.$bodyEl.html(this.template(this.model.toJSON()));
        }
    });

    return SettingsView;
});