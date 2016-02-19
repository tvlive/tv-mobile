angular.module('starter.controllers', [])

    .controller('SeriesCtrl', function ($scope, $state, Friends) {

        $scope.series_now = true;

        $scope.toDetails = function (item) {
            $state.go('details', {itemLink: item.uriTVContentDetails});
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

    .controller('DetailsCtrl', function ($scope, $stateParams, Friends) {
        //Friends.seriesDetails($stateParams.itemLink, function (data) {
        //    $scope.details = transform_date_details(data);
        //    console.debug($scope.details);
        //})
        $scope.details = {
            et: '22:55',
            st: '21:55',
            channel: "RADIO 4 EXTRA",
            channelImageURL: 'http://api.tvlive.io/RADIO_4_EXTRA.png',
            rating: 8.3,
            series: {
                episode: {
                    episodeNumber: '4',
                    episodePlot: 'Martin has a sporting challenge, while Charles attempts to save a disgraced minister. Comedy by Mark Tavener, with Stephen Fry and John Bird. First aired in 2002',
                    seasonNumber: '3',
                    totalNumber: '5',
                    episodeTitle: 'Some title'
                },
                actors: 'Stephen Fry, John Bird, James Lance',
                director: 'Stephen Fry',
                genre: 'drama, thriller',
                serieTitle: 'Absolute Power',
                plot: 'The inner workings of a successful PR firm - lying for a living.',
                year: '2013',
                awards: 'One oscar and 2 golden globes',
                poster: 'http://api.tvlive.io/images/tt0874608'
            },
            onTimeNow: true,
            perCentTimeElapsed: 60

        }

    });