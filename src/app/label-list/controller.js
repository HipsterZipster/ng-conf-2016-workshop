// @ngInject
module.exports = function(API) {
  var vm = this;

  vm.showBottom = false;
  vm.top = [];
  vm.bottom = [];

  API.getLabels().then(setLabels);

  vm.showUnread = function(label) {
    return label.estimatedUnread > 0 && 
      !~['ALL MAIL', 'TRASH', 'SENT MAIL'].indexOf(label.label.toUpperCase());
  };

  vm.toggleBottom = function() {
    vm.showBottom = !vm.showBottom;
  };

  function setLabels(labels) {
    vm.top = labels.high;
    vm.bottom = labels.low;
  }
};

