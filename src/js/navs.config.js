
const navList= [
  {
    name: 'todos'
    ,title: 'Todo List'
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
