app.controller('loggingController', function ($scope, $http, $location, $rootScope) {



    $scope.login = function () {
        var data = "grant_type=password&username=" + $scope.username + "&password=" + $scope.password;

        $http.post('/token', data, { headers: { 'Authorization': 'Bearer' + $rootScope.token } }).then(function (response) {

            $rootScope.token = "OizT0SGUDiXS6PrszST8eLF5vUUr7H5zEtt6kH--wna7mOgJ9WZ0H6rnaTGwzn3K - hv13zZU2ggk2Y3gtksdSf3FYXqpEkldMT--UC0Cd7_bRsR1GeW5VzjIdxJg7iz - muf1w30QtEpxfovCW9fodzLBi4qyZc07so908bC0hCKNE64282H6VKg - VDJ1zRMSjgWOeHF1NmJluiUH66DOfmlBWp2XxI__UJXxglGPr9oZaES8VunyyxbhXkV2y_xDZ0GrdBDGIbfKDSFc7SmFDiig - knPN04R6Gad9jOJwVBomMMRedEAHPzsVOhPMGhsTtCys_ABK7r9kMnhogLYlqxxYirkfHXYtvwJi9GVOcPeQOf - pegJL99_cckFv41t1eP6nM - 6LZOaHNYhjFwgX7FprpwDjNlKQ5Nw0_c4n4 - cJ3hz86NpDwKX - Ya0HvDUQANjJocgqvtVxyAJsk0_Z3rJTYz4tZXPcwE8F64o1mRxQJURNRWElgksz3he2RXn";

            $location.path('/Overview');
            

        }, function (err, status) {
            console.log(err);

        });
    };;

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


