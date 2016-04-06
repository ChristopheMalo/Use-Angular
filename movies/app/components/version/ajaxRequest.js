'use strict';

/**
 * @ngdoc service
 * @name movies.version.ajaxRequest
 * @description
 * # ajaxRequest
 * Factory in the coursExoApp.
 */

angular.module('movies')
    .factory('ajaxRequest', function ($http, $q)
    {
        return {
            viemList: function (page) {
                return $http.get('http://localhost:8080/viewList?page=' + page);
            }
        };
    });
