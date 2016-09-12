
angular.module('otherApp')
.factory('checkRequiredField', [ '$http', "userInformation", function ($http, userInformation) {
    return function (data, page) {
        switch (page) {
            case 1: //this case is for checking registration
                if (data.username != "" && data.password != "" && data.firstname != ""
                   && data.middlename != "" && data.lastname != "") {
                    return true;
                } else {
                    alert("Please Fill All The Necessary Fields To Before Submitting Registration");
                    return false;
                }
                break;
            case 2: //this case is for checking concerns
                break;
            default:
                break;
        }
    }
}]);