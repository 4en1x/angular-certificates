export default class HomeController {
  constructor($scope, HomeService, PagerService) {
    this.scope = $scope;
    this.HomeService = HomeService;
    this.PagerService = PagerService;
    this.getAll();
    this.scope.pager = {};
    this.setPage(1);
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

  setPage(page) {
    if (page < 1 || page > this.scope.pager.totalPages) {
      return;
    }

    this.scope.pager = this.PagerService.GetPager(100, page);
  }
}
