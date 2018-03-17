'use strict';

angular.module('myApp')
    .directive('directiveSlider', function () {
        var activeSlideIndex = 0;
        var dotArray = [];

        return {
            restrict: 'A',
            transclude: true,
            templateUrl: 'components/sliderDirective/slider.html',
            link: function(scope, elem, attr) {
                scope.current = scope.$index;
                scope.isActive = function() { return (scope.current === activeSlideIndex) ? true : false; };

                scope.next = function() {
                    if (scope.$last) {
                        activeSlideIndex = 0;
                        return;
                    }

                    activeSlideIndex++;
                };

                scope.previous = function() {
                    if (scope.$first) {
                        activeSlideIndex = dotArray.length - 1;
                        return;
                    }

                    activeSlideIndex--;
                };

                scope.getDots = function() {
                    return dotArray;
                };

                scope.setSlider = function(index) {
                    activeSlideIndex = index;
                };

                function init() {
                    if (scope.$last) {
                        for(var i = 0; i <= scope.$index; i++) {
                            dotArray.push(true);
                        }
                    }
                }

                init();
            }
        };
    });