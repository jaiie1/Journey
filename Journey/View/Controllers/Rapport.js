app.controller('RapportController', function ($scope, $http) {


        
    $http.get('/api/Vehicles').then(function (response) {
        $scope.vehicles = response.data;

    }, function (error) {
        console.log(error.data.message);
    });

  

});








