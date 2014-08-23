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
    spyOn($modal, 'open').and.callFake(function(config) {
      return config;
    });
    
    // call open function;
    var config = $aside.open();

    expect(config.placement).toBe('left');
    expect(config.windowClass).toBe('ng-aside left');
  });
});
