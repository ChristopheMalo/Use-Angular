application.controller('viewPrograms', function ($scope, $filter, $http) {
    $scope.days = 6; // Number of filter days
    $scope.today = new Date(); // Date of the current day - start of search
    $scope.dateStart = $filter('date')($scope.today, 'yyyy-MM-dd'); // Filter the date
    
    $scope.results = []; // To store the shows
    
    // Return all show - use url to returns datas
    $scope.init = function () {        
        $http({
            method: 'GET',
            url: 'https://api-v2launch.trakt.tv/calendars/all/shows/premieres/' + $scope.dateStart + '/' + $scope.days + '?extended=full,images',
            headers: {
                'Content-type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': 'b60c49535bd4161f15aea498e201cd24c38d382e5cecb3289b11fa79c152b3c1'
            }
        }).then(function successCallback(response) {
            
            $scope.results = response.data;
//            angular.forEach(response, function (value, index)
//            {
//                var firstAired = value.first_aired;
//                
//                angular.forEach(value.episode, function(tvshow, index)
//                {
//                    tvshow.first_aired = firstAired;
//                    $scope.results.push(tvshow);
//                });
//            });
            //console.log(response);
            console.log($scope.results);
            
        }, function errorCallback(response) {
            
            console.log('error');
        
        });
    };
});
