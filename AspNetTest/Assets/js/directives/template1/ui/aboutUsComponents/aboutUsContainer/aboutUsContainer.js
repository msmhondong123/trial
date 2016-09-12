﻿'use strict';

/* Create module for navbar directive */
angular.module('directives.aboutUsContainer', [])

/**
 * navigationBar directive
 */
.directive('aboutUsContainer',
           ['$location',
            function ($location) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.goto = function () {
                        //this one changes the path/url 
                        $location.path(this.item.path);
                    };
                }
                return {
                    restrict: 'EAC',
                    scope: {
                        data:'='
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/aboutUsComponents/aboutUsContainer/aboutUsContainer.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);