import basicRequest from '../../helpers/http/custom-http.helper';

export default class HomeService {
  constructor($http, $rootScope) {
    this.http = $http;
    this.rootScope = $rootScope;
  }

  GetAll(page = 1, amountOnPage = 10, filter, callback, errorCallback) {
    let tags = '';
    filter.tags.forEach(tag => tags += `&tags=${tag.name}`);

    this.http(basicRequest({
      url: `giftcertificates?amountOnPage=${amountOnPage}&page=${page}&sort=${filter.sort}&searchName=${filter.name}&searchDescription=${filter.description}${tags}`,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  GetMy(callback, errorCallback) {
    this.http(basicRequest({
      url: `giftcertificates/user`,
      auth: this.http.defaults.headers.common.Authorization,
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

  GetAmount(filter, callback, errorCallback) {
    let tags = '';
    filter.tags.forEach(tag => tags += `&tags=${tag.name}`);

    this.http(basicRequest({
      url: `giftcertificates/amount?sort=${filter.sort}&searchName=${filter.name}&searchDescription=${filter.description}${tags}`,
    }))
      .then((response) => {
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }
}
