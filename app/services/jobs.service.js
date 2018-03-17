'use strict';

angular.module('myApp')
    .factory('Data', function () {
        const jobs = [
            {
                logo: './assets/image/Webp.net-resizeimage.jpg',
                location: 'Armenia, Yerevan',
                title: 'Software Engineer',
                bookmark: true,
                category: 'it',
                employmentType: 'Full time'
            },
            {
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'UK, London',
                title: 'QA Tester',
                bookmark: false,
                category: 'it',
                employmentType: 'Part time'
            },
            {
                logo: './assets/image/Webp.net-resizeimage.jpg',
                location: 'UK, London',
                title: 'UI/UX designer',
                bookmark: true,
                category: 'design',
                employmentType: 'Full time'
            },
            {
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'operator',
                bookmark: false,
                category: 'movie',
                employmentType: 'Part time'
            },
            {
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'UK, London',
                title: 'Web Developer',
                bookmark: true,
                category: 'it',
                employmentType: 'Full time'
            },
            {
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'Web designer',
                bookmark: false,
                category: 'design',
                employmentType: 'Intern'
            }, {
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'Software Engineer',
                bookmark: false,
                category: 'it',
                employmentType: 'Full time'
            }];
        const categories = ['it', 'design', 'movie'];
        const employmentTypes = ['Full time', 'Part time', 'Contractor', 'Intern', 'Seasonal/temp'];
        const locations = ['Armenia, Yerevan', 'UK, London'];

        return {
            getJobs: function (filter) {
                let filtered = [];
                if (filter) {
                    jobs.forEach((obj) => {
                        if (filter.category && filter.categories) {
                            filtered.push(obj);
                        }
                    });
                }

                return jobs;
            },

            getCategories: function() {
                return categories;
            },

            getLocations: function() {
                return locations;
            },

            getEmplTypes: function() {
                return employmentTypes;
            },

            addBookmark: function (index) {
                return jobs[index].bookmark = true;
            }
        };
    });