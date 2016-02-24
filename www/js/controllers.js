angular.module('starter.controllers', [])

    .controller('SeriesCtrl', function ($scope, $state, Friends) {

        $scope.series_now = true;

        $scope.toDetails = function (item) {
            $state.go('series-details', {itemLink: item.uriTVContentDetails});
        }

        $scope.showNext = function () {
            if ($scope.series_now) {
                $scope.series_now = false;
                Friends.seriesNext(function (data) {
                    $scope.series = transform_content(data);
                })
            }

        }

        $scope.showNow = function () {
            if (!$scope.series_now) {
                $scope.series_now = true;
                Friends.series(function (data) {
                    $scope.series = transform_content(data);
                })
            }
        }

        Friends.series(function (data) {
            $scope.series = transform_content(data);
        })
    })

    .controller('MoviesCtrl', function ($scope, $state, Friends) {
        $scope.movies_now = true;

        $scope.toDetails = function (item) {
            $state.go('movies-details', {itemLink: item.uriTVContentDetails});
        }

        $scope.showNext = function () {
            if ($scope.movies_now) {
                $scope.movies_now = false;
                Friends.moviesNext(function (data) {
                    $scope.movies = transform_content(data);
                })
            }

        }

        $scope.showNow = function () {
            if (!$scope.movies_now) {
                $scope.movies_now = true;
                Friends.movies(function (data) {
                    $scope.movies = transform_content(data);
                })
            }
        }

        Friends.movies(function (data) {
            $scope.movies = transform_content(data);
        })
    })

    .controller('SeriesDetailsCtrl', function ($scope, $ionicHistory, $stateParams, Friends) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.isDetailsSeriesAvailable = false;
        console.debug($scope.isDetailsSeriesAvailable)
        
        Friends.details($stateParams.itemLink, function (data) {
            $scope.details = transform_date_details(data);
            $scope.isDetailsSeriesAvailable = true;
            console.debug($scope.details);
        })
    })

    .controller('MoviesDetailsCtrl', function ($scope, $ionicHistory, $stateParams, Friends) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }
        
        $scope.isDetailsMovieAvailable = false;
        console.debug($scope.isDetailsMovieAvailable);
        
        Friends.details($stateParams.itemLink, function (data) {
            
            $scope.details = transform_date_details(data);
            $scope.isDetailsMovieAvailable = true;
            console.debug($scope.details);
        })
    });
