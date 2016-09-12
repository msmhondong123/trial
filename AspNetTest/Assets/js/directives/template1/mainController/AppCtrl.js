'use strict';


//use the 
angular.module('ngStarterKit')
.controller('AppCtrl',
            ['$scope',
             'sharedService',
             'Globalization',
             'userInformation',
             'loadVerificationCodes',
             'loadSlideImage',
             'loadNews',
             function ($scope, sharedService, Globalization, userInformation, loadVerificationCodes, loadSlideImage, loadNews) {
                 $scope.width = window.innerWidth;
                 $scope.navItems = [];
                 //this one loades the verification code from database
                 $scope.loadVerificationCodes = function () {
                     loadVerificationCodes();
                 };
                 //this one will load the slides images from database
                 $scope.loadSlideImages = function () {
                     loadSlideImage();
                 };
                 $scope.loadNews = function () {
                     loadNews();
                 };

                 //filter the items that will be in the navigation bar
                 $scope.filterNavItems = function () {
                     sharedService.navItems=[];
                     this.tempNav = { label: '', path: '', show: false }
                     for (var i = 0; i < Globalization.globalizationTranslationMainNav.length; i++) {
                         for (var n = 0; n < Globalization.globalizationTranslationMainNav[i].language.length; n++) {
                             if (Globalization.globalizationTranslationMainNav[i].language[n].id == userInformation.language_id) {
                                 this.tempNav.label = Globalization.globalizationTranslationMainNav[i].language[n].translation;
                                 break;
                             }
                         }
                         this.tempNav.path = Globalization.globalizationTranslationMainNav[i].path;
                         if (!userInformation.isadmin && this.tempNav.label == 'Admin Dashboard' || !userInformation.isadmin && this.tempNav.label == '管理ダッシュボード') {
                             this.tempNav.show = false;
                         } else {
                             this.tempNav.show = Globalization.globalizationTranslationMainNav[i].show;
                         }
                         sharedService.navItems.push({label: this.tempNav.label, path: this.tempNav.path, show: this.tempNav.show});
                     }
                     $scope.navItems = sharedService.navItems;
                 };

                 $scope.click = function () {
                     alert($scope.shared.isAdmin);
                 }
                 $scope.updateDashboard = function () {

                 };

}]);

