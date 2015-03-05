
/*!
 * angular-aside - v1.1.2
 * https://github.com/dbtek/angular-aside
 * 2015-03-04
 * Copyright (c) 2015 İsmail Demirbilek
 * License: MIT
 */

(function() {
/**
     * @ngdoc overview
     * @name ngAside
     * @description
     * Main module for aside component.
     * @function
     * @author İsmail Demirbilek
     */
    angular.module('ngAside', ['ui.bootstrap.modal']);
})();

(function() {
    angular.module('ngAside')
    /**
     * @ngdoc service
     * @name ngAside.services:$aside
     * @description
     * Factory to create a modal instance to use it as aside. It simply wraps $modal by overriding open() method and sets a class on modal window.
     * @function
     */
        .factory('$aside', $aside);

    $aside.$inject = ['$modal'];
    /* @ngInject */
    function $aside($modal) {
        var defaults = this.defaults = {
            placement: 'left'
        };

        var asideFactory = {
            // override open method
            open: function(config) {
                var options = angular.extend({}, defaults, config);
                // check placement is set correct
                if(['left', 'right', 'bottom', 'top'].indexOf(options.placement) === -1) {
                    options.placement = defaults.placement;
                }
                var vertHoriz = ['left', 'right'].indexOf(options.placement) === -1 ? 'vertical' : 'horizontal';
                // set aside classes
                options.windowClass  = 'ng-aside ' + vertHoriz + ' ' + options.placement + (options.windowClass ? ' ' + options.windowClass : '');
                delete options.placement
                return $modal.open(options);
            }
        };

        // create $aside as extended $modal
        var $aside = angular.extend({}, $modal, asideFactory);
        return $aside;
    }
})();
