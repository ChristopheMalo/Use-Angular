'use strict';

/**
 * @ngdoc function
 * @name movies.viewList:ViewListController
 * @description
 * # ViewListController
 * Controller of the coursExoApp
 */

angular.module('viewList')
    .controller('ViewListController', function ($scope, ajaxRequest) {
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        var loadMovies = function () {
            $scope.loading = true;
            ajaxRequest.popular($scope.currentPage).success(function (data) {
                $scope.movies = data.results;
                $scope.totalPages = data.total_pages;
                $scope.loading = false;
            });
        };

        $scope.pageChanged = function () {
            loadMovies();
        };
        loadMovies();
    });
    