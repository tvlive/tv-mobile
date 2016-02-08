angular.module('starter.controllers', [])


    .controller('SeriesCtrl', function ($scope, $stateParams, Friends) {

        $scope.showNext = function () {
            Friends.seriesNext(function (data) {
                $scope.series = transform_content(data);
            })
        }

        $scope.showNow = function () {
            Friends.series(function (data) {
                $scope.series = transform_content(data);
            })
        }

        Friends.series(function (data) {
            $scope.series = transform_content(data);
        })
    })

    .controller('MoviesCtrl', function ($scope, $stateParams, Friends) {

        $scope.showNext = function () {
            Friends.moviesNext(function (data) {
                $scope.movies = transform_content(data);
            })
        }

        $scope.showNow = function () {
            Friends.movies(function (data) {
                $scope.movies = transform_content(data);
            })
        }

        Friends.movies(function (data) {
            $scope.movies = transform_content(data);
        })
    });