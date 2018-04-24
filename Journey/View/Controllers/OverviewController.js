app.controller('OverviewController', function ($scope, $location, $rootScope) {
     



    $scope.changeRoute = function () {
        $location.path('/NewTravel');
    };
   
});
