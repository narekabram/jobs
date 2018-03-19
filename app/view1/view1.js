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
            location: {
                name: []
            },
            category: {
                name: []
            },
            title: {
                name: []
            },
            employmentType: {
                name: []
            }
        };

        vm.colors = Data.getColors();
        vm.categories = Data.getCategories();
        vm.emplTypes = Data.getEmplTypes();
        vm.locations = Data.getLocations();
        vm.jobs = Data.filter().data;
        vm.total = Data.filter().total;
        vm.currentColor = Data.currentColor;

        vm.chooseColor = function(color) {
            vm.currentColor = Data.changeColor(color);
        };

        vm.addBookmark = function (index) {
            Data.addBookmark(vm.jobs[index].id);
        };

        vm.search = function () {
            vm.jobs = Data.filter(vm.filter).data;
            vm.total = Data.filter(vm.filter).total;
            Data.filtered = [];
        };

        vm.filterJobs = function (obj, type) {
            if (obj.isChecked) {
                vm.filter[type].name.push(obj);
            } else {
                vm.filter[type].name.forEach(function (obj, index) {
                    if(obj.isChecked === false) {
                        vm.filter[type].name.splice(index, 1);
                    }
                })
            }
            vm.search();
        }
    });