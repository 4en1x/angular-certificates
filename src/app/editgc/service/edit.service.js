export default class HomeService {
  constructor($http) {
    this.http = $http;
  }

  GetGC(id = 1, callback) {
    this.http({
      url: `http://localhost:8888/giftcertificates/${id}`,
      dataType: 'json',
      method: 'GET',
      data: '',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        callback(response);
      });
  }

  DeleteGC(id, callback, errorCallback) {
    console.log(this.http.defaults.headers.common.Authorization);
    console.log(this.http.defaults);
    this.http({
      url: `http://localhost:8888/giftcertificates/${id}`,
      dataType: 'json',
      method: 'DELETE',
      data: '',
      headers: {
        Authorization: this.http.defaults.headers.common.Authorization,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  EditGC(id, gc, callback, errorCallback) {
    console.log(this.http.defaults.headers.common.Authorization);
    console.log(this.http.defaults);
    this.http({
      url: `http://localhost:8888/giftcertificates/${id}`,
      dataType: 'json',
      method: 'PUT',
      data: JSON.stringify(gc),
      headers: {
        Authorization: this.http.defaults.headers.common.Authorization,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }


  AddGC(gc, callback, errorCallback) {
    console.log(this.http.defaults.headers.common.Authorization);
    console.log(this.http.defaults);
    this.http({
      url: 'http://localhost:8888/giftcertificates',
      dataType: 'json',
      method: 'POST',
      data: JSON.stringify(gc),
      headers: {
        Authorization: this.http.defaults.headers.common.Authorization,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }
}
