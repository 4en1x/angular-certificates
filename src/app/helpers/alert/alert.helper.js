export default class AlertHelper {
  constructor(ngToast) {
    this.ngToast = ngToast;
  }

  errorCallback(error) {
    const content = error.data || 'Internal server error';
    this.ngToast.create({
      timeout: 5000,
      content,
      dismissButton: true,
      className: 'danger',
    });

  }

  successCallback(response) {
    const content = response || 'Success';

    this.ngToast.create({
      timeout: 5000,
      content,
      dismissButton: true,
    });
  }
}
