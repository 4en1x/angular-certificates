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

  EditGC(id = 1, gc, callback) {
    console.log(this.http.defaults.headers.common.Authorization)
      console.log(this.http.defaults)
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
      });
  }
}
