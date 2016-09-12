
angular.module('otherApp')
.factory('submitConcern', ['userListService', '$http', function (userListService, $http) {
    return function (data, callBackFunction) {
        var parameters = {
            "registration": angular.toJson(data),
            "process": '4', //process 3 is for saving new concern
        }
        $http.post('index.aspx/AddNew')
        .success(function (data) {
            alert("Success");
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);