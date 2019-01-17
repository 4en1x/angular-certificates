import basicRequest from '../../helpers/http/custom-http.helper';

export default class HomeService {
  constructor($http) {
    this.http = $http;
  }

  GetGC(id = 1, callback, errorCallback) {
    this.http(basicRequest({
      url: `giftcertificates/${id}`,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  DeleteGC(id, callback, errorCallback) {
    this.http(basicRequest({
      url: `giftcertificates/${id}`,
      method: 'DELETE',
      auth: this.http.defaults.headers.common.Authorization,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  EditGC(id, gc, callback, errorCallback) {
    this.http(basicRequest({
      url: `giftcertificates/${id}`,
      method: 'PUT',
      data: JSON.stringify(gc),
      auth: this.http.defaults.headers.common.Authorization,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }


  AddGC(gc, callback, errorCallback) {
    this.http(basicRequest({
      url: 'giftcertificates',
      method: 'POST',
      data: JSON.stringify(gc),
      auth: this.http.defaults.headers.common.Authorization,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }
}
