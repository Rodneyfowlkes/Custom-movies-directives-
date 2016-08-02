function movieCard (){
	return {
		restrict: 'E',
		scope: {
			name: '@movie'
		},
		templateUrl: 'templates/movie-list.html',
		controller: function($scope, getmovies){
			let vm = this 
			// vm.move = getmovies.fetch($scope.name);
			getmovies.fetch($scope.name).then( (res) => {
				console.log(res);
				vm.move = res.data;
			});

		},
		controllerAs: 'vm'

	}

}

movieCard.$inject = [];
export {movieCard}