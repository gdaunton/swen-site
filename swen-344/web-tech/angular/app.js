var photos = angular.module('hello', []);

photos.controller('PhotoListCtrl', function ($scope, $http) {
  $scope.note = "I wanted to take this course because I had already done some web work on my own and wanted to get a higher level understanding on how the web works."
  $scope.links = [
    {
      "title": "Puppy",
      "url": "http://salmonofcapistrano.com/"
    },
    {
      "title": "Back",
      "url": "../web-tech"
    },
  ]
  $scope.photos = [
    {
      "title": "Elephant",
      "url": "assets/elephant.jpg",
      "description": "This is an elephant",
    },
    {
      "title": "Charmander",
      "url": "assets/charmander.png",
      "description": "Rawer",
    },
  ];
});
