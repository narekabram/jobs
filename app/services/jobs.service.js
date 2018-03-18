'use strict';

angular.module('myApp')
    .factory('Data', function () {
        const jobs = [
            {
                id: '1',
                logo: './assets/image/Webp.net-resizeimage.jpg',
                location: 'Armenia, Yerevan',
                title: 'Software Engineer',
                bookmark: true,
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
                id: '4',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'UK, London',
                title: 'Web Developer',
                bookmark: true,
                category: 'it',
                employmentType: 'Full time'
            },
            {
                id: '5',
                logo: './assets/image/Webp.net-resizeimage.png',
                location: 'Armenia, Yerevan',
                title: 'Web designer',
                bookmark: false,
                category: 'design',
                employmentType: 'Intern'
            },
            {
                id: '6',
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

        return {

            filtered: [],

            getJobs: function (filter) {
                if (filter) {
                    if (filter.text) {
                        this.filterByText(jobs, filter);
                    }

                    if (filter.employmentType) {
                        this.filtered.length ? this.filterByEmploymentType(this.filtered, filter) : this.filterByEmploymentType(jobs, filter);
                    }

                    if (filter.location) {
                        this.filtered.length ? this.filterByLocation(this.filtered, filter) : this.filterByLocation(jobs, filter);
                    }

                    if (filter.category) {
                        this.filtered.length ? this.filterByCategory(this.filtered, filter) : this.filterByCategory(jobs, filter)
                    }

                    return this.filtered;
                }

                return jobs;
            },

            filterByLocation: function (jobsArr, filter) {
                this.filtered = [];
                jobsArr.forEach((obj) => {
                    if (filter.location === obj.location) {
                        this.filtered.push(obj);
                    }
                });

                return this.filtered;
            },

            filterByText: function (jobsArr, filter) {
                this.filtered = [];
                jobsArr.forEach((obj) => {
                    if (obj.title.match(filter.text)) {
                        this.filtered.push(obj);
                    }
                });

                return this.filtered;
            },

            filterByCategory: function (jobsArr, filter) {
                this.filtered = [];
                jobsArr.forEach((obj) => {
                    if (filter.category === obj.category) {
                        this.filtered.push(obj);
                    }
                });

                return this.filtered;
            },

            filterByEmploymentType: function (jobsArr, filter) {
                this.filtered = [];
                jobsArr.forEach((obj) => {
                    if (filter.employmentType === obj.employmentType) {
                        this.filtered.push(obj);
                    }
                });

                return this.filtered;
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