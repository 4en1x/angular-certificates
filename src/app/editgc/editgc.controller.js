const deleteConfirmTemplate = require('./view/deleteConfirmation.html');
const exitConfirmTemplate = require('./view/exitConfirmation.html');

export default class EditGCController {
  constructor($scope, $rootScope, $mdDialog, $routeParams, $location, EditGCService, AlertHelper) {
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.location = $location;
    this.routeParams = $routeParams;
    this.mdDialog = $mdDialog;
    this.AlertHelper = AlertHelper;
    this.EditGCService = EditGCService;
    this.scope.gc = {};
    const id = this.routeParams.id;

    if (id) {
      this.getGC(id);
    }

    this.scope.$on('$locationChangeStart', (event) => {
      const path = $location.path();
      if (!this.scope.form) return;
      if (this.scope.form.$dirty) {
        const that = this;
        const mdDialogCtrl = function ($scope) {
          $scope.cancel = function () {
            that.mdDialog.cancel();
          };
          $scope.confirm = function () {
            that.scope.form.$dirty = false;
            that.location.path(path);
            that.mdDialog.cancel();
          };
        };
        this.mdDialog.show({
          controller: mdDialogCtrl,
          template: exitConfirmTemplate,
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          fullscreen: false,
        });

        event.preventDefault();
      }
    });
  }

  getGC(id) {
    this.scope.dataLoading = true;
    this.EditGCService.GetGC(id, (response) => {
      this.scope.gc = response.data;
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  addGC() {
    this.scope.dataLoading = true;
    this.EditGCService.AddGC(this.scope.gc, (response) => {
      this.scope.dataLoading = false;
      this.AlertHelper.successCallback(response);
    }, this.errorCallback.bind(this));
  }

  deleteGC(id) {
    this.scope.dataLoading = true;
    this.EditGCService.DeleteGC(id, (response) => {
      this.AlertHelper.successCallback(response);
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }

  beforeDeleteGC(gcId) {
    const that = this;
    const mdDialogCtrl = function ($scope, dataToPass) {
      $scope.id = dataToPass;
      $scope.cancel = function () {
        that.mdDialog.cancel();
      };
      $scope.delete = function (id) {
        that.deleteGC(id);
        that.mdDialog.cancel();
      };
    };
    this.mdDialog.show({
      locals: { dataToPass: gcId },
      controller: mdDialogCtrl,
      template: deleteConfirmTemplate,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false,
    });
  }

  errorCallback(error) {
    this.AlertHelper.errorCallback(error);
    this.scope.dataLoading = false;
  }

  addTag() {
    if (!this.scope.inputTag) {
      return;
    }

    if (!this.scope.gc.tags) {
      this.scope.gc.tags = [];
    }

    this.scope.gc.tags.push({
      name: this.scope.inputTag,
    });
    this.scope.inputTag = '';
  }

  editGC(id) {
    this.scope.dataLoading = true;
    this.EditGCService.EditGC(id, this.scope.gc, (response) => {
      this.AlertHelper.successCallback(response);
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }
}
