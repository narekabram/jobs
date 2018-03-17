'use strict';

angular.module('myApp')

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Controller',
            controllerAs: 'View1Ctrl',
            css: 'view1/view1.css'
        });
    }])

    .controller('View1Controller', function (Data) {
        var vm = this;
        vm.filter = {
            location: null,
            category: null,
            text: null
        };


        vm.categories = Data.getCategories();
        vm.emplTypes = Data.getEmplTypes();
        vm.locations = Data.getLocations();
        vm.jobs = Data.getJobs();

        vm.data = [{
            name: 'Hayk',
            age: 24
        }, {
            name: 'Souren',
            age: 26
        }];

        vm.addBookmark = function (index) {
            Data.addBookmark(index);
        }

        vm.search = function () {
            Data.getJobs(vm.filter);
        }
    });