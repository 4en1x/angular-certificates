export default class HomeService {
  constructor($http) {
    this.http = $http;
  }

  GetAll(page = 1, amountOnPage = 10, callback, errorCallback) {
    this.http({
      url: `http://localhost:8888/giftcertificates?amountOnPage=${amountOnPage}&page=${page}`,
      dataType: 'json',
      method: 'GET',
      data: '',
      headers: {
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

  GetAmount(callback, errorCallback) {
    this.http({
      url: 'http://localhost:8888/giftcertificates/amount',
      dataType: 'json',
      method: 'GET',
      data: '',
      headers: {
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
