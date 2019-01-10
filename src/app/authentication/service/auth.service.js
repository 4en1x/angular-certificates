export default class AuthService {
  constructor(Base64, $http, $cookieStore, $rootScope, $timeout, $httpParamSerializer) {
    this.http = $http;
    this.httpParamSerializer = $httpParamSerializer;
    this.rootScope = $rootScope;
    this.cookieStore = $cookieStore;
    this.timeout = $timeout;
    this.Base64 = Base64;
  }

  Login(email, password, callback, errorCallback) {
    this.http({
      url: 'http://localhost:8888/oauth/token',
      method: 'POST',
      redirect_url: 'http://localhost:8080',
      data: this.httpParamSerializer({
        grant_type: 'password',
        username: email,
        password,
        client_id: 'devglan-client',
      }),
      headers: {
        Authorization: `Basic ${btoa('devglan-client:devglan-secret')}`,
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      },

    })
      .then((response) => {
        const authToken = `Bearer ${response.data.access_token}`;

        this.http.defaults.headers.common.Authorization = authToken;
        this.cookieStore.put('authToken', authToken);

        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  Register(userName, password, callback, errorCallback) {
    this.http({
      url: 'http://localhost:8888/users',
      dataType: 'json',
      method: 'POST',
      data: {
        password,
        login: userName,
      },
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

  SetCredentials(email, password, username) {
    const authdata = this.Base64.encode(`${email}:${password}`);

    this.rootScope.globals = {
      currentUser: {
        email,
        authdata,
        username,
      },
    };

    this.http.defaults.headers.common.Authorization = `Basic ${authdata}`;
    this.cookieStore.put('globals', this.rootScope.globals);
  }

  ClearCredentials() {
    this.rootScope.globals = {};
    this.cookieStore.remove('globals');
    this.http.defaults.headers.common.Authorization = 'Basic ';
  }
}
