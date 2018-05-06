app.controller('OverviewController', function ($scope, $location, $rootScope, $http) {

    $http.get('/api/Carguides').then(function (response) {
        $scope.carguides = response.data;
    });

    $scope.setVehicle = function () {
        $rootScope.Trip = $scope.car_value;

        $location.path('/NewTravel');
       

    };


    $scope.changeRoute = function () {
        $location.path('/NewTravel');
    };

  

   
});
