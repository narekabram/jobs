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
            text: null,
            employmentType: null
        };


        vm.categories = Data.getCategories();
        vm.emplTypes = Data.getEmplTypes();
        vm.locations = Data.getLocations();
        vm.jobs = Data.getJobs();

        vm.addBookmark = function (index) {
            Data.addBookmark(vm.jobs[index].id);
        };

        vm.search = function () {
            console.log(vm.filter);
            vm.jobs = Data.getJobs(vm.filter);
            Data.filtered = [];
        };

        vm.filterJobs = function (obj, type) {
            if (obj.isChecked) {
                vm.filter[type] = obj.name;
                console.log(vm.filter);
                vm.search();
            }
        }
    });