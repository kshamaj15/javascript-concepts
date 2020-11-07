// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeFunc() {
    var name = 'Mozilla';
    function displayName(value) {
      return function(value2) {
        console.log(name + " " + value + " " + value2);
      }
    }
    return displayName;
}
  
var myFunc = makeFunc;
myFunc()('value')('value2');

//   -- or --
var myFunc1 = makeFunc();
myFunc1('value')('value2');

//   -- or --
var myFunc2 = makeFunc()('value');
myFunc2('value2');

//   -- or --
var myFunc3 = makeFunc()('value')('value2');
myFunc3;