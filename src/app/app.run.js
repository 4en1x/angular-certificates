export default function run($rootScope, $location, $cookieStore, $http) {
  $rootScope.globals = $cookieStore.get('globals') || {};
  $rootScope.path = $location.path();
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = `Basic ${$rootScope.globals.currentUser.authdata}`;
  }

  const watchChangeStart = $rootScope.$on('$locationChangeStart', (event, next, current) => {
    $rootScope.path = $location.path();
  });
}
