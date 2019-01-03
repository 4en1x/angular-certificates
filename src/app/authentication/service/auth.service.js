export default class AuthService {
  constructor(Base64, $http, $cookieStore, $rootScope, $timeout) {
    this.http = $http;
    this.rootScope = $rootScope;
    this.cookieStore = $cookieStore;
    this.timeout = $timeout;
    this.Base64 = Base64;
  }

  Login(email, password, callback) {
    this.timeout(() => {
      const response = { success: email === 'admin@gmail.com' && password === 'admin' };
      if (!response.success) {
        response.message = 'Email or password is incorrect';
      }
      callback(response);
    }, 1000);


    /* Use this for real authentication
                   ----------------------------------------------*/
    // $http.post('/api/authenticate', { email: email, password: password })
    //    .success(function (response) {
    //        callback(response);
    //    });
  }

  SetCredentials(email, password) {
    const authdata = this.Base64.encode(`${email}:${password}`);

    this.rootScope.globals = {
      currentUser: {
        email,
        authdata,
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
