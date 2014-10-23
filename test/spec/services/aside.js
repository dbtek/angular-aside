'use strict';

describe('Service: $aside', function () {

  // load the service's module
  beforeEach(module('ngAside'));

  // instantiate service
  var $aside, $modal;
  
  beforeEach(inject(function (_$aside_, _$modal_) {
    $aside = _$aside_;
    $modal =  _$modal_;
  }));

  it('should do something', function () {
    expect(!!$aside).toBe(true);
  });

  it('should have a valid open function', function() {
    expect(!!$aside.open).toBe(true);
  });

  it('should open a modal with correct options', function() {
    spyOn($modal, 'open')
      .and.callThrough();
    
    // call open function
    var config = $aside.open({
      template: 'test'
    });

    expect($modal.open).toHaveBeenCalledWith({
      template: 'test',
      windowClass: 'ng-aside horizontal left'
    });

    // call open function, vertical placement
    var config = $aside.open({
      template: 'test2',
      placement: 'bottom'
    });

    expect($modal.open).toHaveBeenCalledWith({
      template: 'test2',
      windowClass: 'ng-aside vertical bottom'
    });
  });
});
