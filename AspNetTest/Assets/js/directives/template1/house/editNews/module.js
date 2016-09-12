angular.module('modules.EditNewsMod', [])
.config(['$routeProvider',
         function ($routeProvider) {
             /* Handle route on location path is '/' */
             $routeProvider.when('/EditNews', {
                 templateUrl: '/Assets/js/directives/template1/house/editNews/editNews.html',
                 controller: 'editNewsCtrl'
             });
         }
]);



