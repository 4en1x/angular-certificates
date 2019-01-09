export default class EditGCController {
  constructor($scope, $mdDialog, $routeParams, EditGCService) {
    this.scope = $scope;
    this.routeParams = $routeParams;
    this.mdDialog = $mdDialog;
    this.EditGCService = EditGCService;
    this.scope.gc = {};
    const id = this.routeParams.id;
    if (id) {
      this.getGC(id);
    }
  }

  getGC(id) {
    this.scope.dataLoading = true;
    this.EditGCService.GetGC(id, (response) => {
      if (response.status === 200) {
        this.scope.gc = response.data;
        this.scope.dataLoading = false;
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    }, this.errorCallback.bind(this));
  }


  addGC() {
    this.scope.dataLoading = true;
    this.EditGCService.AddGC(this.scope.gc, (response) => {
      this.scope.dataLoading = false;
      alert('success');
    }, this.errorCallback.bind(this));
  }

  deleteGC(id) {

  }

  errorCallback(error) {
    console.log(error);
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
      alert('success');
      this.scope.dataLoading = false;
    }, this.errorCallback.bind(this));
  }
}
