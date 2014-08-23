'use strict';
/*!
 * angular-aside - v1.0.0
 * https://github.com/dbtek/angular-aside
 * 2014-08-23
 * Copyright (c) 2014 İsmail Demirbilek
 * License: MIT
 */

angular.module('ngAside', ['ui.bootstrap']);
angular.module('ngAside')
  /**
   * @ngdoc service
   * @name ngAside.services:$aside
   * @description
   * Factory to create a modal instance to use it as aside. It simply wraps $modal by overriding open() method and sets a class on modal window.
   * @function
   * @author İsmail Demirbilek
   */
  .factory('$aside', function($modal) {
    var defaults = this.defaults = {
      placement: 'left'
    };

    var asideFactory = {
      // override open method
      open: function(config) {
        var options = angular.extend({}, defaults, config);
        // set aside classes
        options.windowClass  = 'ng-aside ' + options.placement + (options.windowClass ? ' ' + options.windowClass : '');
        return $modal.open(options);
      }
    };

    // create $aside as extended $modal
    var $aside = angular.extend({},$modal, asideFactory);
    return $aside;
  });