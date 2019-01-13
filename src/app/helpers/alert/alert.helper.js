export default class AlertHelper {
  constructor(ngToast, $translate) {
    this.ngToast = ngToast;
    this.scope = {};

    $translate(['alert.error', 'alert.success']).then((t) => {
      this.scope.error = t['alert.error'];
      this.scope.success = t['alert.success'];
    });
  }

  errorCallback(error) {
    const content = error.data || this.scope.error;
    this.ngToast.create({
      timeout: 3000,
      content,
      dismissButton: true,
      className: 'danger',
    });
  }

  successCallback(response) {
    const content = response || this.scope.success;

    this.ngToast.create({
      timeout: 3000,
      content,
      dismissButton: true,
    });
  }
}
