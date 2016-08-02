function GetMovies($http) {

	this.fetch = function (id_list){
		return $http.get(`http://www.omdbapi.com/?i=${id_list}`);
		// $http({
  //    		method: 'GET',
  //    		url: 'http://www.omdbapi.com/',
  //    		data:{
  //    			t: 'Happy Feet'
  //    		}

		// }).then((res)=>{
		// 	console.log(res);})

	};


	
}

GetMovies.$inject = ['$http']
export {GetMovies}