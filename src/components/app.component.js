
define([
  'angularAMD'
  ,'../js/navs.config.js'
  ,'./appNav.component.js'
], (
  angularAMD
  ,navList
  ,appNav
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
    templateUrl: `./src/components/app.component.html`
    ,controller: function appCtrl(
      $scope
      ,$location
    ) {
      // console.info(777, this, $scope, $location)
      this.$onInit= ()=> {
        console.info('app init:', this)
      }
      appNav($scope, $location)
    }
  })
  // .controller(appNav.name, appNav)
  // .component('nav', angularAMD.route({
  //   templateUrl: './src/components/appNav.component.html'
  //   ,controllerUrl: './src/components/appNav.component.js'
  //   ,controller: 'appNav'
  // }))
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
      .otherwise({
        template: `<center md-whiteframe=-1>
          <h1>404</h1>
          <md-content layout-padding="99">
            Lorem ipsum dolor sit amet, ne quod novum mei.
          </md-content>
        </center>
        `
      })
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
