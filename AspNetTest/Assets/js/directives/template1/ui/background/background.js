'use strict';

/* Create module for navbar directive */
angular.module('directives.backgroundComponent', [])

/**
 * navigationBar directive
 */
.directive('backgroundComponent',
           ['sharedService',
            function (sharedService) {
                /* Do the directive's logic here */
                return function (scope, element, attr) {
                    element.css({
                        'background-image': 'url(' + sharedService.background + ')',
                        'background-size': 'cover',
                    });
                }
                

            }]);