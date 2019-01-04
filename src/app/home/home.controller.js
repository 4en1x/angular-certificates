export default class HomeController {
  constructor($scope, HomeService) {
    this.scope = $scope;
    this.HomeService = HomeService;
    this.getAll();
  }

  getAll() {
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
}
