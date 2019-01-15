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
    let content = error.data.exceptionMessage || [this.scope.error];

    if (error.data.exceptionMessage) {
      content = content.split('; ').filter(item => item !== '');
    }
    content.forEach((item) => {
      this.ngToast.create({
        timeout: 3000,
        content: item,
        dismissButton: true,
        className: 'danger',
      });
    });
  }

  successCallback(response) {
    const content = this.scope.success;

    this.ngToast.create({
      timeout: 3000,
      content,
      dismissButton: true,
    });
  }
}
