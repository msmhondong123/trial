'use strict';

/* Create module for navbar directive */
angular.module('directives.playlistComponent', [])

/**
 * navigationBar directive
 */
.directive('playlistComponent',
           ['$location',
            'userInformation',
            function ($location, userInformation) {
                function preFn(scope, element, attr) {

                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.isShowDelete = false;
                    scope.videoPlayed = scope.videos[0];
                    scope.videoPlayed.width = 640;
                    scope.videoPlayed.height = 390;
                    //this function checks if process is for viewing or editing
                    scope.checkProcess = function () {
                        if (userInformation.process == 2) {
                            scope.isShowDelete = true;
                        }
                    };
                    scope.checkProcess();

                    scope.playVideo = function (index) {
                        scope.videoPlayed = scope.videos[index];
                        scope.videoPlayed.width = 640;
                        scope.videoPlayed.height = 390;
                    }
                    scope.remove = function(index){
                        scope.videos.splice(index,1);
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        videos: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/playlistComponent/playlistComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);