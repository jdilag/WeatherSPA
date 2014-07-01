define([
    'underscore'
], function(_) {
    'use strict';

    var Templates = {};

    Templates['place'] = [
        '<div class="panel panel-info">',
            '<div class="panel-heading">',
                '<h3 class="panel-title">',
                    '<%= name %> - <%= countryCode %>',
                '</h3>',
            '</div>',
            '<div class="panel-body">',
                'Panel Content',
            '</div>',
        '</div>'
    ].join('');

    Templates['day'] = [
        '<div class="forecast-day">',
            '<h3><%= weekday %></h3>',
            '<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
            '<p class="forecast-fahr"><%= lowFahrenheit %> &deg;F - <%= highFahrenheit %> &deg;F</p>',
            '<p class="forecast-cel"><%= lowCelsius %> &deg;C - <%= highCelsius %> &deg;C</p>',
            '<div class="forecast-conditions"><%= conditions %></div>',
        '</div>'
    ].join('');

    Templates['modal'] = [
        '<div class="modal fade">',
            '<div class="modal-dialog">',
                '<div class="modal-content">',
                    '<div class="modal-header">',
                        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
                        '<h4 class="modal-title"><%= title %></h4>',
                    '</div>',
                    '<div class="modal-body"></div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');

    Templates['settings'] = [
        '<form role="form">',
            '<div class="form-group">',
                '<label for="welcomeMessageInput">Country Code</label>',
                '<input type="text" class="form-control" id="welcomeMessageInput" placeholder="Enter Welcome Message" value="<%= welcomeMessage %>">',
            '</div>',
            '<div class="form-group">',
                '<label for="backgroundColorInput">Name</label>',
                '<input type="text" class="form-control" id="backgroundColorInput" placeholder="#000000" value="<%= backgroundColor %>">',
            '</div>',
            '<div class="form-group">',
                '<select id="tempType" class="form-control">',
                    '<option value="fahr" <% if (!celsius) print(\"selected\") %>>Fahrenheit</option>',
                    '<option value="cel" <% if (celsius) print(\"selected\") %>>Celsius</option>',
                '</select>',
            '</div>',
            '<button id="btn-save" class="btn btn-default">Save</button>',
        '</form>'
    ].join('');

    for (var tmpl in Templates) {
        if (Templates.hasOwnProperty(tmpl)) {
            Templates[tmpl] = _.template(Templates[tmpl]);
        }
    }

    return Templates;
});