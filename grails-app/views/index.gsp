<!DOCTYPE html>
<html ng-app="angello">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Angello in Action</title>

        <asset:stylesheet href="application.css"/>
    </head>
    <body ng-controller="MainController as main" ng-class="{loading:loadingView}">
        <div ng-switch="main.authenticated">
            <div ng-switch-when="true">
                <div class="navbar navbar-fixed-top navbar-default">
                    <div class="navbar-header pull-left">
                        <a class="logo navbar-brand" href="#/">
                            <asset:image src="angello.png"/>
                        </a>
                    </div>
                    <div class="btn-group pull-right" ><!-- ng-show="main.currentUser" -->
                        <a class="btn btn-danger" href="#/">
                            <span class="glyphicon glyphicon-home"></span>
                        </a>
                        <a class="btn btn-danger" href="#/users">
                            <span class="glyphicon glyphicon-user"></span>
                        </a>
                        <a class="btn btn-danger" href="#/dashboard">
                            <span class="glyphicon glyphicon-signal"></span>
                        </a>
                        <button class="btn btn-default" ng-click="main.logout()">
                            <span class="glyphicon glyphicon-log-out"></span>
                        </button>
                    </div>
                </div>

                <div ng-view=""></div>

                <div ng-include="'assets/angello/templates/list.html'"></div>
            </div>
            <div ng-switch-when="false">
                <div ng-include="'assets/angello/templates/login.tpl.html'"></div>
            </div>
            <div ng-switch-default>
                <h1>Im broken</h1>
            </div>
        </div>

        <div class="modal"></div>
        <asset:javascript src="angello.js" />
    </body>
</html>


