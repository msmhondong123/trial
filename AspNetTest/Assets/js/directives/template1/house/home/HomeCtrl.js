angular.module('modules.Home')
.controller('HomeCtrl',
            ['$scope',
             'userInformation',
             '$location',
             'sharedService',
             'userListService',
             function ($scope, userInformation, $location, sharedService, userListService) {
                 $scope.videos = userListService.news[0].videos;
                 $scope.imageInCarousel = userListService.slideImage;
                 $scope.interval = sharedService.slideInterval;
                 if (!userInformation.islogin) {
                     $location.path('/Login');
                 }
                 $scope.imageClicked = function () {
                     alert("HELOO");
                 };
             }
            ]
);