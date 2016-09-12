
angular.module('otherApp')
.factory('processChecker', [ 'userInformation',function (userInformation){
    return function (path) {
        if (path == '/Login') {
            userInformation.process = 20;
        } else if (path == '/ContactUs') {
            userInformation.process = 21;
        } else if (path == '/EditNews') {
            userInformation.process = 2;
        }
    }
}]);