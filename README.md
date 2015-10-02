angular-aside ![bower version](http://img.shields.io/bower/v/angular-aside.svg) [![npm version](https://badge.fury.io/js/angular-aside.svg)](https://www.npmjs.com/package/angular-aside)
=============

Off canvas side menu to use with ui-bootstrap. Extends ui-bootstrap's $modal provider.

###[Live Demo](http://plnkr.co/edit/G7vMSv?p=preview)

##Install

#### Bower:
```bash
 $ bower install angular-aside
```
Then, include css/js in html.

#### NPM
```bash
 $ npm install angular-aside
```

##Usage

```js
 angular.module('myApp', ['ui.bootstrap', 'ngAside']);
```

```js
angular.module('myApp')
  .controller('MyController', function($scope, $aside) {
    var asideInstance = $aside.open({
      templateUrl: 'aside.html',
      controller: 'AsideCtrl',
      placement: 'left',
      size: 'lg'
    });
  });
```

Supports all configuration that `$modal` has. Can be used with both `template` and `templateUrl`. For more info hit **Modal** section on [angular-ui bootstrap](http://angular-ui.github.io/bootstrap) documentation.


##Additional Config
- `placement` - Aside placement can be `'left'`, `'right'`, `'top'`, or `'bottom'`.


##Credits
- [Angular UI Bootstrap](angular-ui.github.io/bootstrap/)
- [Animate.css](http://daneden.github.io/animate.css/)


##Author

İsmail Demirbilek ([@dbtek](https://twitter.com/dbtek))
