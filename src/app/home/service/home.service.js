import basicRequest from '../../helpers/http/custom-http.helper';

export default class HomeService {
  constructor($http) {
    this.http = $http;
  }

  GetAll(page = 1, amountOnPage = 10, callback, errorCallback) {
    this.http(basicRequest({
      url: `giftcertificates?amountOnPage=${amountOnPage}&page=${page}`,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  GetAmount(callback, errorCallback) {
    this.http(basicRequest({
      url: 'giftcertificates/amount',
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }
}
