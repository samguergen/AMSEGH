var myApp = angular.module('myApp', [])
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  console.log('inside of config block');

  $stateProvider
    
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'MainController'
      })
      .state('become-member', {
        url: '/become-member',
        templateUrl: '../views/become-member.html',
        controller: 'MainController'
      })
      .state('community', {
        url: '/community',
        templateUrl: '../views/community.html',
        controller: 'MainController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '../views/contact.html',
        controller: 'MainController'
      })
      .state('donate', {
        url: '/donate',
        templateUrl: '../views/donate.html',
        controller: 'MainController'
      })
      .state('faces', {
        url: '/faces-of-our-members',
        templateUrl: '../views/faces.html',
        controller: 'MainController'
      })
      .state('family', {
        url: '/family-involvement',
        templateUrl: '../views/family.html',
        controller: 'MainController'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: '../views/faq.html',
        controller: 'MainController'
      })
      .state('member-app', {
        url: '/member-application',
        templateUrl: '../views/member-app.html',
        controller: 'MainController'
      })
      .state('member-programs', {
        url: '/member-programs',
        templateUrl: '../views/member-programs.html',
        controller: 'MainController'
      })
      .state('news', {
        url: '/news',
        templateUrl: '../views/news.html',
        controller: 'MainController'
      })
      .state('non-rider-member', {
        url: '/non-rider-member',
        templateUrl: '../views/non-rider-member.html',
        controller: 'MainController'
      })
      .state('organization', {
        url: '/organization',
        templateUrl: '../views/organization.html',
        controller: 'MainController'
      })
      .state('pay-online', {
        url: '/pay-online',
        templateUrl: '../views/pay-online.html',
        controller: 'MainController'
      })
      .state('rider-stories', {
        url: '/rider-stories',
        templateUrl: '../views/rider-stories.html',
        controller: 'MainController'
      })
      .state('services', {
        url: '/what-we-do',
        templateUrl: '../views/services.html',
        controller: 'MainController'
      })
      .state('volunteer-to-drive', {
        url: '/volunteer-to-drive',
        templateUrl: '../views/volunteer-to-drive.html',
        controller: 'MainController'
      })
      .state('add-pta-credit', {
        url: '/add-pta-credit',
        templateUrl: '../views/add-pta-credit.html',
        controller: 'MainController'
      })

  // default fall back route
  $urlRouterProvider.otherwise('/test');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
});