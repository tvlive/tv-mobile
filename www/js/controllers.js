angular.module('starter.controllers', [])

    .controller('SeriesCtrl', function ($scope, $state, Friends) {

        $scope.series_now = true;

        $scope.toDetails = function (item) {
            $scope.loadingDetailsSeries = false;
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
            $scope.loadingDetailsMovies = false;
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

        $scope.loadingDetailsSeries = false

        Friends.details($stateParams.itemLink, function (data) {
            //console.debug($scope.loadingDetailsSeries)
            $scope.details = transform_date_details(data);
            //console.debug($scope.details);
            $scope.loadingDetailsSeries = true;
            //console.debug($scope.loadingDetailsSeries)
        })
    })

    .controller('MoviesDetailsCtrl', function ($scope, $ionicHistory, $stateParams, Friends) {

        $scope.goBack = function () {
            $ionicHistory.goBack();
        }

        $scope.loadingDetailsMovies = false

        Friends.details($stateParams.itemLink, function (data) {
            //console.debug($scope.loadingDetailsMovies)
            $scope.details = transform_date_details(data);
            //console.debug($scope.details);
            $scope.loadingDetailsMovies = true;
            //console.debug($scope.loadingDetailsMovies)

        })
    });