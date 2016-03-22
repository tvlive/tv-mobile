angular.module('starter.controllers', [])

    .controller('SeriesCtrl', function ($rootScope, $scope, $state, Friends) {

        //$scope.series_now = true;

        $scope.toDetails = function (item) {
            $state.go('series-details', {itemLink: item.uriTVContentDetails});
        }

        $scope.showNext = function () {
            if ($rootScope.series_now) {
                $rootScope.series_now = false;
                Friends.seriesNext($rootScope.provider, function (data) {
                    $rootScope.series = transform_content(data);
                })
            }

        }

        $scope.showNow = function () {
            if (!$rootScope.series_now) {
                $rootScope.series_now = true;
                Friends.series($rootScope.provider, function (data) {
                    $rootScope.series = transform_content(data);
                })
            }
        }

        Friends.series($rootScope.provider, function (data) {
            console.debug("first time series")
            $rootScope.series = transform_content(data);
        })
    })

    .controller('MoviesCtrl', function ($rootScope, $scope, $state, Friends) {

        //$scope.movies_now = true;

        $scope.toDetails = function (item) {
            $state.go('movies-details', {itemLink: item.uriTVContentDetails});
        }

        $scope.showNext = function () {
            if ($rootScope.movies_now) {
                $rootScope.movies_now = false;
                Friends.moviesNext($rootScope.provider, function (data) {
                    $rootScope.movies = transform_content(data);
                })
            }

        }

        $scope.showNow = function () {
            if (!$rootScope.movies_now) {
                $rootScope.movies_now = true;
                Friends.movies($rootScope.provider, function (data) {
                    $rootScope.movies = transform_content(data);
                })
            }
        }

        Friends.movies($rootScope.provider, function (data) {
            console.debug("first time movies")
            $rootScope.movies = transform_content(data);
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
    })

    .controller('ProvidersCtrl', function ($rootScope, $scope, Friends) {

        $scope.selectProvider = function () {
            $rootScope.provider = $scope.data.clientSide;

            $rootScope.movies_now = true;
            $rootScope.movies_now = true;
            Friends.movies($rootScope.provider, function (data) {
                $rootScope.movies = transform_content(data);
            })

            $rootScope.series_now = true;
            $rootScope.series_now = true;
            Friends.series($rootScope.provider, function (data) {
                $rootScope.series = transform_content(data);
            })

        };


        $scope.clientSideList = [
            {text: "Freeview", value: "FREEVIEW"    },
            {text: "SKY", value: "SKY%20&%20CABLE"}
        ];

        $scope.data = {
            clientSide: $rootScope.provider
        };
    });
