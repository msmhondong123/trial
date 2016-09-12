
angular.module('otherApp')
.factory('userInformation', function () {
    var userInformation = {
        username: '',
        language_id:1,
        isadmin: false,
        islogin: false,
        newsToModify_id: -1,
        process: 20,
        successRegister: false,
        sucessCreatingConcern:false,
    };
    return userInformation;
});