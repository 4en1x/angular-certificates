import basicRequest from '../../helpers/http/custom-http.helper';

export default class HomeService {
  constructor($http, $rootScope) {
    this.http = $http;
    this.rootScope = $rootScope;
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

  Buy(id, callback, errorCallback) {
    this.http(basicRequest({
      url: `payments/buy?giftCertificateId=${id}&userId=${this.rootScope.userId}`,
      auth: this.http.defaults.headers.common.Authorization,
      method: 'POST',
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
