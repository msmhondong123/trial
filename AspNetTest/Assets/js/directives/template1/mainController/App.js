'use strict';



/* Wait for all resources to be downloaded */
angular
    .element(document)
    .ready(function () {
        /**
        * ngStarterKit Module
        *
        * Description:
        *   A simple boilerplate for angularjs developers
        */
        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });

angular.module('ngStarterKit', [
            'ngRoute',
            /* Directives */
            'directives.loginComponent',
            'directives.registrationComponent',
            'directives.navigationBar',
            'directives.contactUsBody',
            'directives.concernComponent',
            'directives.verificationCode',
            'directives.socialNavBar',
            'directives.inboxSection',
            'directives.concernSection',
            'directives.newsContainer',
            'directives.newsBody',
            'directives.playlistComponent',
            'directives.carouselImage',
            'directives.embedVideo',
            /*Modules*/
            'modules.Home',
            'modules.Login',
            'modules.ContactUs',
            'modules.AdminDashboard',
            'modules.News',
            /* Services*/
            'otherApp',
])
        .config(['$routeProvider',
                 function ($routeProvider) {
                     $routeProvider.otherwise({ redirectTo: '/Login' });
                 }
        ]);
