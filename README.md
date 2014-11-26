angular-aside ![bower version](http://img.shields.io/bower/v/angular-aside.svg)
=============

Off canvas side menu to use with ui-bootstrap. Extends ui-bootstrap's $modal provider.

###[Live Demo](http://plnkr.co/edit/G7vMSv?p=preview)

##Install

- Install with bower:
```bash
 $ bower install angular-aside
```
- Include css/js in html.


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
