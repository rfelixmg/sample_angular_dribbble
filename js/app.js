/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var app = angular.module('dabbble', [
    'dabbble.controllers',
    'dabbble.filters',
    'dabbble.services',
]);

app.config(function($routeProvider){
    $routeProvider
    .when("/shots/:id", {controller:"ShotCtrl", templateUrl: "pages/shot.html"})
    .when("/:list", {controller:"ShotsListCtrl", templateUrl: "pages/list.html"})
    .otherwise({redirectTo: "/popular"})
});

