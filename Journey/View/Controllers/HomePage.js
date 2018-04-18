app.controller('HomePageController', function ($scope, $location) {
    $scope.changeRouteToLog = function () {

        $location.path('/Logging');
    };
    $scope.changeRouteToSign = function () {

        $location.path('/NewUser');
    };
});