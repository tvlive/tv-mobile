angular.module('starter.controllers', [])

    .controller('SeriesCtrl', function ($scope, $stateParams, Friends) {

        $scope.series_now = true;

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
                $scope.series_now = true
                Friends.series(function (data) {
                    $scope.series = transform_content(data);
                })
            }
        }

        Friends.series(function (data) {
            $scope.series = transform_content(data);
        })
    })

    .controller('MoviesCtrl', function ($scope, $stateParams, Friends) {

        $scope.movies_now = true;

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
                $scope.movies_now = true
                Friends.movies(function (data) {
                    $scope.movies = transform_content(data);
                })
            }
        }

        Friends.movies(function (data) {
            $scope.movies = transform_content(data);
        })
    });