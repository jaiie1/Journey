app.controller('loggingController', function ($scope, $http, $location, $rootScope) {



    $scope.login = function () {
        var data = "grant_type=password&username=" + $scope.username + "&password=" + $scope.password;

        $http.post('/token', data, { headers: { 'Authorization': 'Bearer ' + $rootScope.token } }).then(function (response) {

            $rootScope.token = response.data.access_token;

            //console.log(data);
            //console.log(loginData.token);

            $location.path('/Overview');
            

        }, function (err, status) {
            console.log(err);

        });
    };

    //vm.tryGet = function () {
    //    $http.get('/api/trips/gettrips', { headers: { 'Authorization': 'Bearer' + rootScope.token } }).then(function (response) {
    //        vm.responseFromApi = response;
    //    }, function (error) {
    //        vm.responseFromApi = error;

    //    });

    //};


});


angular.module("app").factory("myOtherService", function () {
    return {
        logsomething: function () {
            console.log('Logging someting in factory');
        }
    };

});


