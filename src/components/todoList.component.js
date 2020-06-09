define([
  'app'
], (
  app
)=> {
  app.controller('todoList', [
    '$scope'
    , function (
      $scope
    ) {
      this.todoList= ([1,2,3]).map(el=> {
        return {
          content: Math.random()
          ,isDone: Math.random()>= 0.5
        }
      })
    }
  ])
})