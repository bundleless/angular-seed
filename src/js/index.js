// hack: mock requirejs for angularAMD 's dependenced
window.require= ([deps], cb)=> System.import(deps).then(cb)

System.import('angularjs')
.then((
  angularGlobal
)=> {
  return Promise.all([
    // lib: ngRoute
    System.import('ngRoute')
    // lib: ngMaterial
    ,Promise.all([
      System.import('ngAnimate')
      ,System.import('ngAria')
    ])
    .then(([
      ngAnimate
      ,ngAria
    ])=> {
      return System.import('ngMaterial')
    })
    // hook: DOM ready
    ,new Promise((resolve)=> {
      angular.element(document)
      .ready(resolve)
    })
  ])
})
.then(([
  ngRoute
  ,ngMaterial
])=> {
  // component: app
  return System.import('./src/components/app.component.js')
})