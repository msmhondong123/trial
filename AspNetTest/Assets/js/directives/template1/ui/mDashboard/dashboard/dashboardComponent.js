'use strict';

/* Create module for navbar directive */
angular.module('directives.dashboardComponent', [])

/**
 * navigationBar directive
 */
.directive('dashboardComponent',
           ['$location',
            function ($location) {
                //executes before gui
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                //after gui
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.goto = function () {
                        //this one changes the path/url 
                        $location.path(this.item.path);
                    };
                }
                return {
                    restrict: 'EAC',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/mDashboard/dashboard/dashboardComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);