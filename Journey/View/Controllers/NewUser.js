app.controller('userController', function ($scope, $http) { 
    $scope.user = {};    
    $scope.createUser = function () {

        $http({
            method: 'POST',
            url: '/api/Account/Register',
            data: $scope.user
        });
    };
});