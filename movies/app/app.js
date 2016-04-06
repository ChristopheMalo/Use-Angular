'use strict';

/**
 * @ngdoc overview
 * @name movies
 * @description
 * # movies
 *
 * Main module of the application.
 */
angular
    .module('movies', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/viewList', {
                templateUrl: 'viewList/viewList.html',
                controller: 'ViewListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
