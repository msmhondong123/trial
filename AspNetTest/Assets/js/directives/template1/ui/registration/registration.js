'use strict';

/* Create module for navbar directive */
angular.module('directives.registrationComponent', [])
/**
 * navigationBar directive
 */
.directive('registrationComponent',
           ['$location',
            'registrationService',
            'userListService',
            'processChecker',
            'userInformation',
            'submitRegistration',
            'checkRequiredField',
            function ($location, registrationService, userListService, processChecker, userInformation, submitRegistration, checkRequiredField) {
                function preFn(scope, element, attr) {
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.username = "";
                    scope.password = "";
                    scope.repassword = "";
                    scope.firstname = "";
                    scope.middlename = "";
                    scope.lastname = "";
                    scope.birthMonth = "";
                    scope.birthDay = "";
                    scope.birthYear = "";
                    scope.age = "";
                    scope.width = window.innerWidth;

                    scope.goto = function () {
                        //this one changes the path/url
                        processChecker(this.item.path);
                        $location.path(this.item.path);
                    };
                    scope.successEvent = function () {
                        alert("Success Adding In Registration");
                    };
                    scope.submit = function () {
                        //this process is for changing verification checking into registration
                        var data = {
                            username: scope.username, password: scope.password, retypePassword: scope.repassword, firstname: scope.firstname, middlename: scope.middlename,
                            lastname: scope.lastname, birthMonth: scope.birthMonth, birthDay: scope.birthDay, birthYear: scope.birthYear, age: scope.age
                        };
                        var check = checkRequiredField(data, 1);

                        if (userInformation.successRegister == true && check == true) {
                            
                            submitRegistration(data, scope.successEvent);
                            //send this data to post method and save it into the database
                        } else {
                            alert("Please Fill The Necessary Information Needed");
                        }
                    };
                    scope.changeVerificationCode = function () {
                        scope.choosenVerification = userListService.verification[Math.floor((Math.random() * 2))];
                    };
                    scope.changeVerificationCode();
                }
                return {
                    restrict: 'EAC',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/registration/registrationComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);