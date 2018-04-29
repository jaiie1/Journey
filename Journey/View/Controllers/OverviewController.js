app.controller('OverviewController', function ($scope, $location, $rootScope, $http) {


    $scope.changeRoute = function () {
        $location.path('/NewTravel');
    };

    $http.get('/api/Carguides').then(function (response) {
        $scope.car = response.data;
    });

    $scope.setVehicle = function () {
        $scope.car = $scope.car_value;
    };

   
});
