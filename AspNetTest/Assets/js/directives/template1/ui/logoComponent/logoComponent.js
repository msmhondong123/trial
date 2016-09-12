﻿'use strict';

/* Create module for navbar directive */
angular.module('directives.logoComponent', [])

/**
 * navigationBar directive
 */
.directive('logoComponent',
           ['$location',
            'sharedService',
            function ($location, sharedService) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.logo = sharedService.logo;
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/logoComponent/logoComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };
            }]);