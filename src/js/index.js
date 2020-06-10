// hack: mock requirejs for angularAMD 's dependenced
window.require= ([deps], cb)=> System.import(deps).then(cb)

// hack: dynamic set page base href
document.head.appendChild(Object.assign(
  document.createElement('base')
  ,{
    href: function(matched){
      return matched
        ? matched[0]
        : '/'
    }(location.pathname.match(/\/(.+?\/){0,1}/))
  }
  )
)

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
  // return System.import('./src/components/app.component.js')
  return System.import('App')
})