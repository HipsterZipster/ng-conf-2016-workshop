require('./style.css');

// @ngInject
module.exports = function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      kind: '@',
      tooltip: '@',
    },
    template: require('./template.html'),
    controller: require('./controller.js'),
    controllerAs: 'button',
    bindToController: true,
  };
}

