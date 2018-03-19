'use strict';

angular.module('myApp')
    .factory('Data', function () {

        // here is mock data

        const jobs = [
            {
                id: '1',
                logo: './assets/image/Webp.net-resizeimage.jpg',
                location: 'Armenia, Yerevan',
                title: 'Software Engineer',
                bookmark: false,
                category: 'it',
                employmentType: 'Full time'
            },
            {
                id: '2',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'UK, London',
                title: 'QA Tester',
                bookmark: false,
                category: 'it',
                employmentType: 'Part time'
            },
            {
                id: '3',
                logo: './assets/image/Webp.net-resizeimage.jpg',
                location: 'UK, London',
                title: 'UI/UX designer',
                bookmark: true,
                category: 'design',
                employmentType: 'Full time'
            },
            {
                id: '4',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'operator',
                bookmark: false,
                category: 'movie',
                employmentType: 'Part time'
            },
            {
                id: '5',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'UK, London',
                title: 'Web Developer',
                bookmark: true,
                category: 'it',
                employmentType: 'Full time'
            },
            {
                id: '6',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'Web designer',
                bookmark: false,
                category: 'design',
                employmentType: 'Intern'
            },
            {
                id: '7',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'Software Engineer',
                bookmark: false,
                category: 'it',
                employmentType: 'Full time'
            }];
        const categories = [
            {name: 'it'},
            {name: 'design'},
            {name: 'movie'}];
        const employmentTypes = [
            {name: 'Full time'},
            {name: 'Part time'},
            {name: 'Contractor'},
            {name: 'Intern'},
            {name: 'Seasonal/temp'}];
        const locations = [{name: 'Armenia, Yerevan'}, {name: 'UK, London'}];
        const colors = [
            {
                name: 'green',
                hover: '#4cae4c',
                color: '#32CD32'
            },
            {
                name: 'orange',
                color: '#FFA500',
                hover: '#FF8C00'
            },
            {
                name: 'purple',
                color: '#9400D3',
                hover: '#8B008B'
            },
            {
                name: 'blue',
                color: '#0000CD',
                hover: '#191970'
            }
        ];

        return {

            filtered: [],

            currentColor: colors[0],

            getColors: function () {
                return colors;
            },

            changeColor: function (color) {
                return this.currentColor = color;
            },

            filterAuth: function (filterObj) {
                for (var i = 0; i < Object.keys(filterObj).length; i++) {
                    if (filterObj[Object.keys(filterObj)[i]] && filterObj[Object.keys(filterObj)[i]].name) {
                        return true;
                    }
                }
                return false
            },

            filter: function (fiObj) {
                this.filtered = jobs.slice();

                if (!fiObj) {
                    return this.calculateData(jobs);
                }

                if (this.filterAuth(fiObj)) {
                    let typesArr = [];
                    let filtered = this.filtered;
                    Object.keys(fiObj).forEach(function (filterType) {
                        if (fiObj[filterType].name.length) {
                            filtered = filtered.filter(function (job) {
                                if (fiObj[filterType].name.constructor.name === 'Array') {
                                    typesArr = fiObj[filterType].name.filter(function (obj) {
                                        if ((job[filterType].toUpperCase().includes(obj.name.toUpperCase()))) {
                                            return job;
                                        }
                                    });

                                    if (typesArr.length) {
                                        return filtered.concat(typesArr);

                                    }

                                } else if (fiObj[filterType].name.constructor.name === 'String') {
                                    if ((job[filterType].includes(fiObj[filterType].name))) {
                                        return job;
                                    }
                                }
                            });
                        }
                    });

                    return this.calculateData(filtered);
                }

                return this.calculateData(jobs);
            },

            getCategories: function () {
                return categories;
            },

            getLocations: function () {
                return locations;
            },

            getEmplTypes: function () {
                return employmentTypes;
            },

            calculateData: function (jobs) {
                // in real site here we must have pagination logic
                if (jobs.length > 5) {
                    return {data: jobs.slice(0, 5), total: jobs.length};
                } else {
                    return {data: jobs, total: jobs.length};
                }
            },

            addBookmark: function (id) {
                jobs.forEach((obj) => {
                    if (obj.id === id) {
                        obj.bookmark = true;
                    }
                });

                return;
            }
        };
    });