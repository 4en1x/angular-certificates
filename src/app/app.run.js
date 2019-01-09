export default function run($rootScope, $location, $cookieStore, $http) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  $rootScope.path = $location.path();
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = $cookieStore.get('authToken');
  }

  const watchChangeStart = $rootScope.$on('$locationChangeSuccess', (event, next, current) => {
    $rootScope.path = $location.path();
  });
}
