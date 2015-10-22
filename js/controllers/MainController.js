app.controller('MainController', ['$scope', 'apiMarketGrab', function($scope, apiMarketGrab) {
    apiMarketGrab.success(function(data){
        $scope.bMarketData = data.response;
    });

    $scope.title = 'Market API: ';
}]);
