// JavaScript Document
var firstapp = angular.module("firstapp", [
  "ui.router",
  "phonecatControllers",
  "templateservicemod",
  "navigationservice"
]);

firstapp.config(function(
  $stateProvider,
  $urlRouterProvider,
  $httpProvider,
  $locationProvider
) {
  // for http request with session
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "views/template.html",
      controller: "HomeCtrl"
    })
    .state("pagination", {
      url: "/pagination",
      templateUrl: "views/template.html",
      controller: "PaginationCtrl"
    })
    .state("star-wars", {
      url: "/star-wars",
      templateUrl: "views/template.html",
      controller: "StarWarsCtrl"
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});
