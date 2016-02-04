angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', ['$http', function($http) {
  // Might use a resource here that returns a JSON array


  return {
    movies: function (success_callback) {
      console.debug('series')                     
      $http.get('http://api.tvlive.io/tvcontent/film/FREEVIEW/current', 
        {
          headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
        }
      }).success(success_callback);      
      // return content_now;
      },
    series:  function (success_callback) {
      console.debug('series')                     
      $http.get('http://api.tvlive.io/tvcontent/series/FREEVIEW/current', 
        {
          headers: {'Authorization': 'YWx2YXJvLnZpbGFwbGFuYUBnbWFpbC5jb206NTZhZTdhMjIyYzAwMDAyYzAwMmMzZTBm'
        }
      }).success(success_callback);      
      // return content_now;
      }
          
  }
}]);
