/**
 * Load controllers, directives, filters, services before bootstrapping the application.
 * NOTE: These are named references that are defined inside of the config.js RequireJS configuration file.
 */
define([
    'jquery',
    'angular',
    'main',
    'routes',
    'interceptors',
    'px-datasource',
    'ng-bind-polymer'
], function ($, angular) {
    'use strict';

    /**
     * Application definition
     * This is where the AngularJS application is defined and all application dependencies declared.
     * @type {module}
     */
    var predixApp = angular.module('predixApp', [
        'app.routes',
        'app.interceptors',
        'sample.module',
        'predix.datasource',
        'px.ngBindPolymer'
    ]);

    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    predixApp.controller('MainCtrl', ['$scope', '$rootScope', 'PredixUserService', function ($scope, $rootScope, predixUserService) {

        //Global application object
        window.App = $rootScope.App = {
            version: '1.0',
            name: 'Predix Seed',
            session: {},
            tabs: [
                {icon: 'fa fa-home', state: 'typeOne', label: 'Map Canvas'},
                // {icon: 'fa fa-cogs', state: 'typeTwo', label: 'Map2'},
                //{icon: 'fa fa-flask', state: 'blank-page1', label: 'Plant Configurator'},
				{icon: 'fa fa-flask', state: 'mapsGoogle', label: 'Distance calculator'} ,
                /*{icon: 'fa fa-map-marker', state: '', label: 'Site Placement'},
                {icon: 'fa fa-cube', state: '', label: '3D Plant Exploration'} */
            ]
        };

/*         $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (angular.isObject(error) && angular.isString(error.code)) {
                switch (error.code) {
                    case 'UNAUTHORIZED':
                        //redirect
                        predixUserService.login(toState);
                        break;
                    default:
                        //go to other error state
                }
            }
            else {
                // unexpected error
            }
        }); */
		
		$scope.login=function(){
					$('#login').hide();
					$('#vpinfo').show();
					
				};	
		$scope.close=function(){
			$('#login').hide();
			$('#vpinfo').hide();
			
		};	
		
    }]);


    //Set on window for debugging
    window.predixApp = predixApp;

    //Return the application  object
    return predixApp;
});
