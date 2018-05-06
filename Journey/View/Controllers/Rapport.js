app.controller('RapportController', function ($scope, $http) {


    // 
    $http.get('/api/Vehicles').then(function (response) {
        $scope.vehicles = response.data;

    }, function (error) {
        console.log(error.data.message);
    });

    $scope.setVehicle = function () {
        $scope.vehicle = $scope.vehicle_value;
    };


    // Chart Report


    $scope.saveReport = function (queryObj) {


        tripsService.saveReport(queryObj).then(function (response) {

            $scope.report = response.data;

            $scope.labels = ["0-20 km", "21-50 km", "51-200 km"];
            $scope.data = [$scope.report.zeroToTwenty, $scope.report.twentyOneToFifty, $scope.report.fiftyOneToTwoHundred];
            //console.log($scope.data);

        }).
            catch((err) => {
                console.log(err);
            });

    };
    //Itextsharp report
    $scope.savePdfReport = function (queryObj) {

        tripsService.savePdfReport(queryObj).then(function (response) {

            $scope.reportPdf = response.data;
            //console.log($scope.reportPdf);

        }).
            catch((err) => {
                console.log(err);
            });

    };

});




//var api = {
//    get: get,
//    post: post
//};

//return api;

//function get(method) {
//    var deferred = $q.defer();
//    $http.get('/api/Vehicles/' + method).then(function (data, status, headers, config) {
//        deferred.resolve({
//            success: true,
//            data: data.data
//        });
//    }, function (response) {
//        deferred.reject({
//            data: response,
//            success: false
//        });
//    });
//    return deferred.promise;
//}

//function post(method, postData) {
//    var deferred = $q.defer();
//    $http.post('api/Vehicles/' + method, postData).then(function (data, status, headers, config) {
//        deferred.resolve({
//            success: true,
//            data: data.data
//        });
//    }, function (response) {
//        deferred.reject({
//            data: response,
//            success: false
//        });
//    });
//    return deferred.promise;
//}