import angular from 'angular';
import {MainController} from './controllers/main.controller.js'
import {movieCard} from './movie-card.directive.js'
import {GetMovies} from './services/http.service.js'


console.log(angular)
angular 
	.module('app', [])
	.controller('MainController', MainController)
	.directive('movieCard', movieCard)
	.service('getmovies', GetMovies)
;


// getmovies.fetch();