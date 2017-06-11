'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: function MovieListController() {
      this.movies = [
        {
            name: 'aaa',
            snippet: 'mega cooler film 1',
            age: 1
        }, {
            name: 'ccc',
            snippet: 'super cooler film 2',
            age: 2
        }, {
            name: 'bbb',
            snippet: 'super cooler film 3',
            age: 3
        }
      ];

      this.orderProp = 'age';
    }
  });
