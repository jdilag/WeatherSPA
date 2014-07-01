define([
    'jquery',
    'underscore',
    'backbone',
    'app/templates',
    'bootstrap'
], function($, _, Backbone, Templates, Bootstrap) {
    'use strict';

    var ModalView = Backbone.View.extend({
        template: Templates['modal'],
        events: {

        },
        id: 'modal-view',
        render: function() {
            this.$modalEl.modal({
                show: false,
                keyboard: false
            });

            return this;
        },
        show: function() {
            var self = this;
            this.$modalEl.modal('show');
            this.$modalEl.on('hidden.bs.modal', function() {
                self.onModalHidden();
            });
        },
        onModalHidden: function() {
            this.$modalEl.off('hidden.bs.modal');
            this.remove();
        },
        initialize: function(options) {
            var title    = options.title || '';
            var appendTo = options.appendTo || 'body';
            var html     = Templates['modal']({title: title});

            this.$el.html(html);
            this.$modalEl = this.$('.modal');
            this.$bodyEl  = this.$('.modal-body');
            this.$titleEl = this.$('.modal-title');

            $(appendTo).append(this.el);
        }
    });

    return ModalView;
});