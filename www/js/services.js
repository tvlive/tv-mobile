angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', ['$http', function($http) {
  // Might use a resource here that returns a JSON array


  return {
    movies: function (provider, success_callback) {
      console.debug(provider);
      $http.get('http://api.tvlive.io/tvcontent/film/' + provider + '/current',
        {
          headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZlYjM5MWIxODAwMDAxODAwMzlhMThk'
        }
      }).success(success_callback);      
      // return content_now;
      },
    moviesNext: function (provider, success_callback) {
      console.debug(provider);
      $http.get('http://api.tvlive.io/tvcontent/film/'  + provider + '/next',
          {
            headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZlYjM5MWIxODAwMDAxODAwMzlhMThk'
            }
          }).success(success_callback);
      // return content_now;
    },

    series:  function (provider, success_callback) {
      console.debug(provider);
      $http.get('http://api.tvlive.io/tvcontent/series/' + provider + '/current',
        {
          headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZlYjM5MWIxODAwMDAxODAwMzlhMThk'
        }
      }).success(success_callback);      
      // return content_now;
      },

    seriesNext:  function (provider, success_callback) {
      console.debug(provider);
      $http.get('http://api.tvlive.io/tvcontent/series/'+ provider + '/next',
          {
            headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZlYjM5MWIxODAwMDAxODAwMzlhMThk'
            }
          }).success(success_callback);
      // return content_now;
    },
    details:  function (url, success_callback) {
      $http.get(url,
          {
            headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZlYjM5MWIxODAwMDAxODAwMzlhMThk'
            }
          }).success(success_callback);
      // return content_now;
    }
          
  }
}]);
