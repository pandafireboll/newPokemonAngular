
//Creating angular app
var app = angular.module('myApp', ['firebase']);

//Creating angular app   !!! The array looking stuff here is not necessary
//app.controller('MainController', function($scope, $firebase){.....})     is fine
app.controller('MainController', ['$scope', '$firebase', function($scope, $firebase){
	
	//Linking my app to the firebase account here
	var ref = new Firebase('https://sylvesterpoke.firebaseio.com/');
	var sync = $firebase(ref);

	//The firebase is synced to my locally created pokemonList
	//Changes to pokemon list
	$scope.pokemonList=sync.$asArray();

	
	//Function for adding pokemon to my firebase database
	$scope.addPoke=function(){

		//$add syntax is unique to angularfirebase
		$scope.pokemonList.$add($scope.pokemon);
		$scope.pokemon={};
	};

	//Function for deleting pokemon to my firebase database
	$scope.deletePoke=function(released){
		//$remove is syntax unique to angularfire
		$scope.pokemonList.$remove(released);
	};

	//Function for updating pokemon in my firebase
	$scope.updatePoke=function(updated){
		//$remove is syntax unique to angularfire
		//Simply update the list with the passed pokemon
		$scope.pokemonList.$save(updated);
	};

}]);