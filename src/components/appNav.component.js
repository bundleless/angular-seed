
function appNav (
  $scope
  ,$location
) {
  $scope.navList= navList
  $scope.currentNavItem = $location.path()
    ? $location.path().replace('/', '')
    : $scope.navList[0].name

  $scope.goto = function(page) {
    $scope.status = "Goto " + page
    $location.path(`/${page}`)
  }

  $scope.$on('$routeChangeSuccess', function () {
    $scope.currentNavItem = $location.path()
      ? $location.path().replace('/', '')
      : $scope.navList[0].name
  })
}

define([
], function(
) {
  return appNav
  // app.controller('appNav', [
  //   '$scope'
  //   ,'$location'
  //   ,function(
  //     $scope
  //     ,$location
  //   ) {
  //     $scope.navList= navList
  //     $scope.currentNavItem = $location.path()
  //       ? $location.path().replace('/', '')
  //       : $scope.navList[0].name

  //     $scope.goto = function(page) {
  //       $scope.status = "Goto " + page
  //       $location.path(`/${page}`)
  //     }
  //   }
  // ])
})
