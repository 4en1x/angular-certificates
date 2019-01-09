export default function run($rootScope, $location, $cookieStore, $http) {
  console.log($cookieStore.get('globals'));
  console.log($cookieStore.get('authToken'));
  $rootScope.globals = $cookieStore.get('globals') || {};
  $rootScope.path = $location.path();
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = $cookieStore.get('authToken');
  }

  const watchChangeStart = $rootScope.$on('$locationChangeStart', (event, next, current) => {
    $rootScope.path = $location.path();
  });
}
