<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="AspNetTest.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" type="text/css" href="/Assets/css/template1/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="/Assets/css/template1/Custom.css" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
</head>
<body ng-controller="AppCtrl" ng-init="filterNavItems();" >
    
    <navigation-bar items="navItems"></navigation-bar> 
    <div ng-view></div>


    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.min.js"></script>
    <!--Directives-->
    <script src="Assets/js/directives/template1/ui/navigationBar/navigationBar.js"></script>
    <!--Sub Directives-->
    <script src="/Assets/js/directives/template1/ui/registration/registration.js"></script>
    <script src="/Assets/js/directives/template1/ui/loginComponent/loginComponent.js"></script>

    <!--Services-->
    <script src="/Assets/js/directives/services/sharedControllerService.js"></script>
    <script src="/Assets/js/directives/services/registrationService.js"></script>
    <script src="/Assets/js/directives/services/Globalization.js"></script>
    <script src="/Assets/js/directives/services/userInformation.js"></script>
    <script src="/Assets/js/directives/services/userListService.js"></script>

    <!--Modules-->
    <!--Modules Login-->
    <script src="/Assets/js/directives/template1/house/login/module.js"></script>
    <script src="/Assets/js/directives/template1/house/login/LoginCtrl.js"></script>


    <script src="Assets/js/directives/template1/mainController/App.js"></script>
    <script src="Assets/js/directives/template1/mainController/AppCtrl.js"></script>

</body>
</html>
