export default class HomeController {
  constructor($scope, $mdDialog, EditGCService) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.EditGCService = EditGCService;
    const id = 1;
    this.getGC(id);
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
    });
  }

  addTag() {
    if (!this.scope.inputTag) {
      return;
    }

    this.scope.gc.tags.push({
      name: this.scope.inputTag,
    });
    this.scope.inputTag = '';
  }

  editGC(id) {
    this.scope.dataLoading = true;
    this.EditGCService.EditGC(id, this.scope.gc, (response) => {
      if (response.status === 200) {
        alert('success');
        this.scope.dataLoading = false;
      } else {
        this.scope.error = response.message;
        this.scope.dataLoading = false;
      }
    });
  }
}
