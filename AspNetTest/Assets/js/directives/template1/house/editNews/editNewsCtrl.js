angular.module('modules.EditNewsMod')
.controller('editNewsCtrl',
            ['$scope',
             '$location',
             'sharedService',
             'userInformation',
             function ($scope, $location, sharedService, userInformation) {
                 $scope.checkCredentials = function () {
                     if (userInformation.newsToModify_id == -1) {
                         $location.path('/Home');
                     } else if (userInformation.islogin == false) {
                         $location.path('/Login');
                     }
                 };
                 $scope.checkCredentials();

                 sharedService.isShowNavBar = false;
                 


(sharedService.isShowNavBar);
                 $scope.back = function () {
                     sharedService.isShowNavBar = true;
                     userInformation.newsToModify_id = -1;
                     $location.path('/News');
                 };
             }
            ]
);