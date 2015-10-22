var userAPIToken = "YOUR_API_TOKEN";
var userAPIAccountURL = "https://1broker.com/api/v1/account/info.php?token="+userAPIToken+"&pretty=1";
var marketList = "https://1broker.com/api/v1/market/list.php?token="+userAPIToken+"&pretty=1";
var marketSymbol = "EURUSD";
var marketPrice = "https://1broker.com/api/v1/market/quotes.php?symbols="+marketSymbol+"&token="+userAPIToken+"&pretty=1";
app.factory('apiMarketGrab', ['$http', function($http) {
    return $http.get(marketList)
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);

app.factory('apiPriceGrab', ['$http', function($http) {
    return $http.get(marketPrice)
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
