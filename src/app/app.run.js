export default function run($rootScope, $location, $cookieStore, $http, $translate) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  $rootScope.userParams = $cookieStore.get('userParams');
  $rootScope.path = $location.path();
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = $cookieStore.get('authToken');
  }

  $translate.use($cookieStore.get('language') || 'en');

  const watchChangeStart = $rootScope.$on('$locationChangeSuccess', (event, next, current) => {
    const isUserNotLogged = !$rootScope.globals.currentUser || $rootScope.userParams.role !== 'ADMIN' || !$cookieStore.get('authToken');
    if (!(
      $location.path() === '/login'
          || $location.path() === '/register'
          || $location.path() === '/'
          || $location.path() === '/my'
    ) && isUserNotLogged) {
      if (!$rootScope.userParams) {
        $location.path('/login');
      } else {
        $location.path('/');
      }
    }

    $rootScope.path = $location.path();
    $rootScope.isLogged = $rootScope.globals.currentUser && $cookieStore.get('authToken');
  });
}
