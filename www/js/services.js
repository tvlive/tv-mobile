angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', ['$http', function($http) {
  // Might use a resource here that returns a JSON array


  return {
    movies: function (success_callback) {
      $http.get('http://api.tvlive.io/tvcontent/film/SKY%20&%20CABLE/current',
        {
          headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
        }
      }).success(success_callback);      
      // return content_now;
      },
    moviesNext: function (success_callback) {
      $http.get('http://api.tvlive.io/tvcontent/film/SKY%20&%20CABLE/next',
          {
            headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
            }
          }).success(success_callback);
      // return content_now;
    },

    series:  function (success_callback) {
      $http.get('http://api.tvlive.io/tvcontent/series/SKY%20&%20CABLE/current',
        {
          headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
        }
      }).success(success_callback);      
      // return content_now;
      },

    seriesNext:  function (success_callback) {
      $http.get('http://api.tvlive.io/tvcontent/series/SKY%20&%20CABLE/next',
          {
            headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
            }
          }).success(success_callback);
      // return content_now;
    },
    details:  function (url, success_callback) {
      $http.get(url,
          {
            headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
            }
          }).success(success_callback);
      // return content_now;
    }
          
  }
}]);
