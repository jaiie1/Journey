app.controller('OverviewController', function ($scope, $location) {
    $scope.OverviewMessage = "Hej";

    $scope.changeRoute = function () {
        $location.path('/View/html/Newtravel.html');
    };
   
});
