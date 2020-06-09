
define([
  'angularAMD'
  ,'../js/navs.config.js'
], (
  angularAMD
  ,navList
)=> {
  console.info({navList})
  window.vm= angular.module('app', [
    'ngMaterial'
    ,'ngRoute'
  ])
  // .value('$routerRootComponent', 'app')
  .config(function($locationProvider) {
    $locationProvider.html5Mode(false);
  })
  .component('app', {
    templateUrl: `/src/components/app.component.html?v=${new Date().getTime()}`
    ,controller: function appCtrl(
      $scope
      ,$location
    ) {
      // console.info(777, this, $scope, $location)
      this.$onInit= ()=> {
        console.info('app init:', this)
      }
      $scope.navList= navList
      $scope.currentNavItem = $location.path()
        ? $location.path().replace('/', '')
        : $scope.navList[0].name

      $scope.goto = function(page) {
        $scope.status = "Goto " + page
        $location.path(`/${page}`)
      }
    }
  })
  .config([
    '$routeProvider'
    ,function (
      $routeProvider
    ){
      $routeProvider
      .when('/', {
        redirectTo: '/todos'
      })
      .when('/todos', angularAMD.route({
        templateUrl: './src/components/todoList.component.html'
        ,controllerUrl: './src/components/todoList.component.js'
        ,controller: 'todoList'
        ,controllerAs: 'state'
      }))
      .when('/phones', angularAMD.route({
        templateUrl: './src/components/phoneList.component.html'
        ,controllerUrl: './src/components/phoneList.component.js'
        ,controller: 'phoneList'
        ,controllerAs: 'state'
      }))
      .otherwise('/')
    }
  ])
  .run([
    '$rootScope'
    ,function (
      $rootScope
    ) {
      // console.info({$rootScope})
      $rootScope.$on('$routeChangeStart', (event, next, current)=> {
        // console.info({event}, {next}, {current})
      })
    }
  ])
  const app= angularAMD.bootstrap(
    vm
    ,true
    ,document.querySelector('.app-main')
  )
  return app
})
