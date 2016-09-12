'use strict';

/* Create module for navbar directive */
angular.module('directives.greetingComponent', [])

.directive('greetingComponent',
           ['$location',
            'userInformation',
            function ($location, userInformation) {
                function preFn(scope, element, attr) {
                }
                function postFn(scope, element, attr) {
                    scope.name = userInformation.username;
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/greetingComponent/GreetingComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };


            }]);