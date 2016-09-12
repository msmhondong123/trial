
angular.module('otherApp')
.factory('submitRegistration', ['userInformation', '$http', function (userInformation, $http) {
    return function (data, callBackFunction) {
        var parameters = {
            "registration": angular.toJson(data),
            "process":'3', //process 3 is for saving new registration
        }
        $http.post('index.aspx/AddNew')
        .success(function (data) {
            alert("Success Registration");
            callBackFunction();
        }).error(function (data) {

        });
    }
}]);