'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',

    controller: ['$http',
        function MovieListController($http) {
            var self = this;
            self.orderProp = 'age';

            $http.get('movies/movies.json').then(function(response) {
                self.movies = response.data;
            });
        }
    ]
  });
