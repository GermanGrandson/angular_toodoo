angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope){

  $scope.todos = [
    {'title': 'Build a todo app', 'done': false}
  ];


  $scope.addTodo = function(){
    $scope.todos.push({'title':$scope.newTodo, 'done':false})
    $scope.newTodo = ''
  }

  function erase(tasks){
    return !tasks.done};

  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(erase)

  }

}])
