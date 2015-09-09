/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var filters = angular.module('dabbble.filters', []);

filters.filter('dabbbleDate', function($filter){
    return function (value, format) {
        if(value) {
            value = Date.parse(value)
        }
        return $filter('date')(value, format)
    }
});
