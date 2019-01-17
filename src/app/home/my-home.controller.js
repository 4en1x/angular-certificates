const fullViewTemplate = require('./view/fullView.html');

export default class MyHomeController {
  constructor($scope, $mdDialog, HomeService, AlertHelper) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.HomeService = HomeService;
    this.AlertHelper = AlertHelper;
    this.getMy();
  }

  getMy() {
    this.scope.dataLoading = true;
    this.HomeService.GetMy((response) => {
      this.scope.gcs = this.filter(response.data);
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  filter(items) {
    let filterItems = {};
    const namesWithCounts = items.reduce((acc, curr) => {
      if (typeof acc[curr.name] === 'undefined') {
        acc[curr.name] = 1;
      } else {
        acc[curr.name] += 1;
      }
      return acc;
    }, {});

    filterItems = items.filter((item, index, self) => index === self.findIndex(t => (t.name === item.name)));
    filterItems = filterItems.map(item => Object.assign(item, { count: namesWithCounts[item.name] }));

    return filterItems;
  }

  buy(id) {
    this.scope.dataLoading = true;
    this.HomeService.Buy(id, (response) => {
      this.AlertHelper.successCallback(response);
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  showFull(e) {
    const gc = this.scope.gcs.filter(item => item.id.toString() === e.target.dataset.id)[0];

    const that = this;
    const mdDialogCtrl = function ($scope, dataToPass) {
      $scope.gc = dataToPass;
      $scope.cancel = function () {
        that.mdDialog.cancel();
      };
    };

    this.mdDialog.show({
      locals: { dataToPass: gc },
      controller: mdDialogCtrl,
      template: fullViewTemplate,
      parent: angular.element(document.body),
      targetEvent: e,
      clickOutsideToClose: true,
      fullscreen: false,
    });
  }

  errorCallback(error) {
    this.AlertHelper.errorCallback(error);
    this.scope.dataLoading = false;
  }
}
