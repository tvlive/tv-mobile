angular.module('starter.controllers', [])

// .controller('DashCtrl', function($scope) {
// })

// .controller('FriendsCtrl', function($scope, Friends) {
//   $scope.friends = Friends.all();
// })

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('SeriesCtrl', function($scope, $stateParams, Friends) {
  Friends.series(function(data) {
            $scope.series = transform_content(data);            
  })

  // $scope.series = [{ 
  //       channel: 'E4 PLUS 1',
  //     channelImageURL: 'http://api.tvlive.io/E4_PLUS_1.png',
  //       rating: 6.9,        
  //       poster: 'http://api.tvlive.io/images/tt0076729',              
  //       perCentTimeElapsed: 31
  //     }]
})

.controller('MoviesCtrl', function($scope, $stateParams, Friends) {
  Friends.movies(function(data) {
            $scope.movies = transform_content(data);            
  })

  // $scope.series = [{ 
  //       channel: 'E4 PLUS 1',
  //     channelImageURL: 'http://api.tvlive.io/E4_PLUS_1.png',
  //       rating: 6.9,        
  //       poster: 'http://api.tvlive.io/images/tt0076729',              
  //       perCentTimeElapsed: 31
  //     }]
});
// .controller('AccountCtrl', function($scope) {
// });
