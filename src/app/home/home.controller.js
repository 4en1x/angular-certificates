const fullViewTemplate = require('./view/fullView.html');

export default class HomeController {
  constructor($scope, $mdDialog, HomeService, PagerService) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.HomeService = HomeService;
    this.PagerService = PagerService;
    this.getAll();
    this.scope.pager = {};
    this.scope.amount = 0;
    this.getAmount(true);
  }

  getAll(firstTime) {
    this.scope.dataLoading = true;
    this.HomeService.GetAll(1, 10, (response) => {
      if (response.status === 200) {
        this.scope.gcs = response.data;
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
  }

  getAmount(firstTime) {
    this.scope.dataLoading = true;
    this.HomeService.GetAmount((response) => {
      if (response.status === 200) {
        this.scope.amount = response.data;
        if (firstTime === true) {
          this.setPage(1);
        }
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
  }

  setPage(page) {
    if (page < 1 || page > this.scope.pager.totalPages) {
      return;
    }

    this.scope.pager = this.PagerService.GetPager(this.scope.amount, page);
    this.scope.dataLoading = true;
    this.HomeService.GetAll(page, 10, (response) => {
      if (response.status === 200) {
        this.scope.gcs = response.data;
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
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
    })
      .then((answer) => {
        this.scope.fullStatus = `You said the information was "${answer}".`;
      }, () => {
        this.scope.fullStatus = 'You cancelled the dialog.';
      });
  }
}
