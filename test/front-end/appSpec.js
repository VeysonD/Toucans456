var expect = chai.expect;

describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should fail', function() { expect(true).to.be.false; });
});

describe('tourist component', function () {
  var element;

  beforeEach(module('app'));
  beforeEach(module('templates'));


  beforeEach(inject(function($rootScope, $compile) {
    var scope = $rootScope.$new();
    element = angular.element('<nav></nav>');
    element = $compile(element)(scope);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log('THIS IS THE ELEMENT 1', element);
    $rootScope.$digest();
  }));

  console.log('THIS IS THE ELEMENT 2', element);

  it('should have a selectRecipe function on the scope', function() {
    console.log('THIS IS THE ELEMENT 3', element.isolateScope());
    expect(element.isolateScope().$ctrl.searchRecipe).to.exist;
  });


});

// describe('app', function () {
//   var sonicElement, recipeSpy;

//   beforeEach(module('inventory'));
//   beforeEach(module('templates'));

//   beforeEach(inject(function($rootScope, $compile) {
//     var sonicScope = $rootScope.$new();
//     sonicScope.user = 'bob';

//     sonicElement = angualr.element(' <h1>This is the {{$ctrl.user}}!</h1>');


//     });
//   )



// })
