export default function run($rootScope, $location, $cookieStore, $http) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = `Basic ${$rootScope.globals.currentUser.authdata}`;
  }

  const watchChangeStart = $rootScope.$on('$locationChangeStart', (event, next, current) => {
    // redirect to login page if not logged in
    if (!($location.path() === '/login' || $location.path() === '/register') && !$rootScope.globals.currentUser) {
      $location.path('/login');
    }
  });
}
