// JavaScript Document
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
	
	$scope.helloConsole= dataService.helloConsole;
	$scope.todos = dataService.getTodos(function(response){
			console.log(response.data);
			$scope.todos = response.data;
			});
	
	$scope.helloWorld = function() {
	   console.log("Hello there! This the hello world controller function, in the mainCtrls!");	
	};
	
})
.service('dataService',function($http){
      	this.helloConsole = function(){
			console.log("This is  the hello console service!");
		};
		
		
		
		
		this.getTodos= function(callback){
			$http.get('mock/todos.json')
		    .then(callback)
		}
		
		this.deleteTodo = function(todo){
		};
		
	  

	
});

