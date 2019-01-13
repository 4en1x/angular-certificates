export default function run($rootScope, $location, $cookieStore, $http, $translate) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  $rootScope.path = $location.path();
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = $cookieStore.get('authToken');
  }

  $translate.use($cookieStore.get('language') || 'en');

  const watchChangeStart = $rootScope.$on('$locationChangeSuccess', (event, next, current) => {
    const isUserNotLogged = !$rootScope.globals.currentUser && !$cookieStore.get('authToken');
    if (!(
      $location.path() === '/login'
          || $location.path() === '/register'
          || $location.path() === '/'
    ) && isUserNotLogged) {
      if ($rootScope.globals.currentUser) {
        $location.path('/login');
      } else {
        $location.path('/');
      }
    }

    $rootScope.path = $location.path();
    $rootScope.isLogged = $rootScope.globals.currentUser && $cookieStore.get('authToken');
  });
}
