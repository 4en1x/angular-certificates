const fullViewTemplate = require('./view/fullView.html');

export default class HomeController {
  constructor($scope, $mdDialog, HomeService, PagerService, AlertHelper) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.HomeService = HomeService;
    this.PagerService = PagerService;
    this.AlertHelper = AlertHelper;
    this.scope.filter = {
      sort: 'modification_date_desc',
      name: '',
      description: '',
      tags: [],
    };

    this.scope.searchParams = 'desc';
    this.scope.searchOrder = 'modification_date';
    this.scope.tagsSearch = [];
    this.scope.searchName = '';
    this.scope.searchDescription = '';

    this.getAll();
    this.scope.pager = {};
    this.scope.amount = 0;
    this.scope.amountOnPage = 10;
    this.scope.page = 1;

    this.getAmount(true);
  }

  getAll(firstTime) {
    this.scope.dataLoading = true;
    this.HomeService.GetAll(1, this.scope.amountOnPage, this.scope.filter, (response) => {
      this.scope.gcs = response.data;
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  getAmount(firstTime) {
    this.scope.dataLoading = true;
    this.HomeService.GetAmount((response) => {
      this.scope.amount = response.data;
      if (firstTime === true) {
        this.setPage(1);
      }
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  buy(id) {
    this.scope.dataLoading = true;
    this.HomeService.Buy(id, (response) => {
      this.AlertHelper.successCallback(response);
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  setPage(page) {
    if (page < 1 || page > this.scope.pager.totalPages) {
      return;
    }

    this.scope.pager = this.PagerService.GetPager(this.scope.amount, page);
    this.scope.page = page;
    this.scope.dataLoading = true;
    this.HomeService.GetAll(page, this.scope.amountOnPage, this.scope.filter, (response) => {
      this.scope.gcs = response.data;
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  setAmountOnPage(amount) {
    this.scope.amountOnPage = amount;
    this.setPage(1);
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

  addSearchTag() {
    if (!this.scope.inputTag) {
      return;
    }

    if (!this.scope.tagsSearch) {
      this.scope.tagsSearch = [];
    }

    this.scope.tagsSearch.push({
      name: this.scope.inputTag,
    });
    this.scope.inputTag = '';
  }

  setOrderParameter(param) {
    this.scope.searchParams = param;
  }

  setOrder(order) {
    this.scope.searchOrder = order;
  }

  filter() {
    this.scope.filter = {
      sort: `${this.scope.searchOrder}_${this.scope.searchParams}`,
      name: this.scope.searchName,
      description: this.scope.searchDescription,
      tags: this.scope.tagsSearch,
    };

    this.HomeService.GetAll(this.scope.page, this.scope.amountOnPage, this.scope.filter, (response) => {
      this.scope.gcs = response.data;
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  errorCallback(error) {
    this.AlertHelper.errorCallback(error);
    this.scope.dataLoading = false;
  }
}
