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
        console.log('---------------------------------------------');
        console.log(response);
        callback(response);
      },
      (error) => {
        errorCallback(error);
      });
  }

  Register(email, userName, password, callback) {
    this.timeout(() => {
      const response = { success: email === 'admin@gmail.com' && userName === 'admin' && password === 'admin' };
      if (!response.success) {
        response.message = 'Email or userName or password is incorrect';
      }
      callback(response);
    }, 1000);
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
