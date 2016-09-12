'use strict';

/* Create module for navbar directive */
angular.module('directives.newsContainer', [])

/**
 * navigationBar directive
 */
.directive('newsContainer',
           ['$location',
            'userInformation',
            'userListService',
            function ($location, userInformation, userListService) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.allowModifyNews = userInformation.isadmin;
                    scope.index=-1;
                    scope.findIndex = function () {
                        for (var i = 0; i < userListService.news.length; i++) {
                            if (userListService.news[i].id == scope.news.id) {
                                scope.index = i;
                                break;
                            }
                        }
                    };
                    scope.findIndex();

                    scope.ModifyNews = function (action, id) {
                        if (action == 'edit') {
                            userInformation.newsToModify_id = id;
                            $location.path('/EditNews');
                        } else {
                            alert("Are You Sure You Want To Delete This News?");
                        }
                    };
                    
                }
                return {
                    restrict: 'E',
                    scope: {
                        news:'=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/newsComponents/newsContainer/newsContainer.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);