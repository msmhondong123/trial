angular.module('modules.AdminDashboard')
.controller('adminDashboardCtrl',
            ['$scope',
             'userInformation',
             '$location',
             'Globalization',
             'userListService',
             function ($scope, userInformation, $location, Globalization, userListService) {
                 //this checks 
                 $scope.isAdminCheck = function () {
                     if (!userInformation.isadmin) {
                         $location.path('/Login');
                     }
                 }
                 $scope.isAdminCheck();
                 $scope.navItems=[];

                 $scope.filterAdminNavBar = function () {
                     this.tempNav = { label: '', path: '', show: false }
                     for (var i = 0; i < Globalization.adminNavBarItems.length; i++) {
                         for (var n = 0; n < Globalization.adminNavBarItems[i].language.length; n++) {
                             if (Globalization.adminNavBarItems[i].language[n].id == userInformation.language_id) {
                                 this.tempNav.label = Globalization.adminNavBarItems[i].language[n].translation;
                                 break;
                             }
                         }
                         this.tempNav.path = Globalization.adminNavBarItems[i].path;
                         this.tempNav.show = Globalization.adminNavBarItems[i].show;
                         $scope.navItems.push({ label: this.tempNav.label, path: this.tempNav.path, show: this.tempNav.show });
                     }
                 };
                 $scope.filterAdminNavBar();

                 $scope.inbox = userListService.inbox;
                 $scope.concernData = userListService.concerns;
                 

                 //this here is used in toggling data
                 $scope.inboxShow = true;
                 $scope.newsShow = true;
                 $scope.concernShow = true;
                 $scope.toggleInbox = function () {
                     if ($scope.inboxShow == true) {
                         $scope.inboxShow = false;
                     } else {
                         $scope.inboxShow = true;
                     }
                 };
                 $scope.toggleNews = function () {
                     if ($scope.newsShow == true) {
                         $scope.newsShow = false;
                     } else {
                         $scope.newsShow = true;
                     }
                 };
                 $scope.toggleConcerns = function () {
                     if ($scope.concernShow == true) {
                         $scope.concernShow = false;
                     } else {
                         $scope.concernShow = true;
                     }
                 };



              }
            ]
);