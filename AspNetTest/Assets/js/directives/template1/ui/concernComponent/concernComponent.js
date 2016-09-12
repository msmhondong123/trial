'use strict';

/* Create module for navbar directive */
angular.module('directives.concernComponent', [])

.directive('concernComponent',
           ['$location',
            'sharedService',
            'userListService',
            'userInformation',
            'submitConcern',
            function ($location, sharedService, userListService, userInformation, submitConcern) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    //this process is for changing verification checking into creating concerns
                    userListService.process = 21;
                    scope.firstname = "";
                    scope.lastname = "";
                    scope.email = "";
                    scope.contact = "";
                    scope.message = "";
                    scope.subject = sharedService.subjectTypeCombo[0].subject;
                    scope.subjectTypeCombo = sharedService.subjectTypeCombo;
                    scope.isShowSuccessMessage = false;
                    scope.sendToAdmin = function () {
                        if (userInformation.sucessCreatingConcern == true) {
                            var data = { title: '', subject: scope.subject, message: scope.message, username: scope.firstname + ' ' + scope.lastname, unread: false, resolved: false }
                            submitConcern(data, scope.pushDataToConcerns);
                        } else {
                            alert("Please Type in Correct Verification Code");
                        }
                    };
                    scope.pushDataToConcerns = function () {
                        alert("Thank You Very Much For the Feedback");
                        scope.isShowSuccessMessage = true;
                        userListService.concerns.push(data);
                    };

                    scope.changeVerificationCode = function () {
                        scope.choosenVerification = userListService.verification[Math.floor((Math.random() * 2))];
                    };
                    scope.changeVerificationCode();

                }
                return {
                    restrict: 'EAC',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/concernComponent/concernComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };


            }]);