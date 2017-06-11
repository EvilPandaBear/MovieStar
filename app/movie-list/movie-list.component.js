angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: function MovieListController() {
        this.movies = [
            {
                name: 'film1',
                snippet: 'mega cooler film 1'
            }, {
                name: 'film2',
                snippet: 'super cooler film 2'
            }, {
                name: 'film3',
                snippet: 'super cooler film 3'
            }
        ];
    }
});
