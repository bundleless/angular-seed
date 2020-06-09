
const navList= [
  {
    name: ''
    ,title: 'Default Page'
  }
  ,{
    name: 'phones'
    ,title: 'Phone List'
  }
  ,{
    name: 'page1'
    ,title: 'Page One'
  }
  ,{
    name: 'page2'
    ,title: 'Page Two'
  }
  ,{
    name: 'page3'
    ,title: 'Page Three'
  }
  ,{
    name: 'page4'
    ,title: 'Page Four'
  }
]

console.info(
  typeof exports,
  typeof require,
  typeof define
)
// if(typeof exports === 'object') module.exports= navList
// if(typeof define=== 'function'&& define.amd) define(navList)
;(function (window, factory) {
  if (typeof exports === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    window.eventUtil = factory()
  }
})(this, function () {
  // module ...
  return navList
})
