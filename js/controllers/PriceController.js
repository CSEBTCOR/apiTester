app.controller('PriceController', ['$scope', 'apiPriceGrab', function($scope, apiPriceGrab) {

    apiPriceGrab.success(function(data){
     $scope.bPriceData = data.response;
     });

    $scope.title = 'Market API: ';
}]);
