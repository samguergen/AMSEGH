var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  console.log('inside of config block');

  $stateProvider
    
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        // controller: 'MainController'
      })
      .state('become-member', {
        url: '/become-member',
        templateUrl: 'views/become-member.html',
        // controller: 'MainController'
      })
      .state('community', {
        url: '/community',
        templateUrl: 'views/community.html',
        // controller: 'MainController'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        // controller: 'MainController'
      })
      .state('donate', {
        url: '/donate',
        templateUrl: 'views/donate.html',
        // controller: 'MainController'
      })
      .state('faces', {
        url: '/faces-of-our-members',
        templateUrl: 'views/faces.html',
        // controller: 'MainController'
      })
      .state('family', {
        url: '/family-involvement',
        templateUrl: 'views/family.html',
        // controller: 'MainController'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'views/faq.html',
        // controller: 'MainController'
      })
      .state('member-app', {
        url: '/member-application',
        templateUrl: 'views/member-app.html',
        // controller: 'MainController'
      })
      .state('member-programs', {
        url: '/member-programs',
        templateUrl: 'views/member-programs.html',
        // controller: 'MainController'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'views/news.html',
        // controller: 'MainController'
      })
      .state('non-rider-member', {
        url: '/non-rider-member',
        templateUrl: 'views/non-rider-member.html',
        // controller: 'MainController'
      })
      .state('organization', {
        url: '/organization',
        templateUrl: 'views/organization.html',
        // controller: 'MainController'
      })
      .state('pay-online', {
        url: '/pay-online',
        templateUrl: 'views/pay-online.html',
        // controller: 'MainController'
      })
      .state('rider-stories', {
        url: '/rider-stories',
        templateUrl: 'views/rider-stories.html',
        // controller: 'MainController'
      })
      .state('what-we-do', {
        url: '/what-we-do',
        templateUrl: 'views/what-we-do.html',
        // controller: 'MainController'
      })
      .state('corporate', {
        url: '/corporate',
        templateUrl: 'views/corporate.html',
        // controller: 'MainController'
      })
      .state('volunteer-to-drive', {
        url: '/volunteer-to-drive',
        templateUrl: 'views/volunteer-to-drive.html',
        // controller: 'MainController'
      })
      .state('add-pta-credit', {
        url: '/add-pta-credit',
        templateUrl: 'views/add-pta-credit.html',
        // controller: 'MainController'
      })

  // default fall back route
  $urlRouterProvider.otherwise('/');

  // enable HTML5 Mode for SEO
  // $locationProvider.html5Mode(true);
})

myApp.controller('MainController', ['$scope', function ($scope)  {
  console.log('inside main controller');
  $scope.zoomLevel = 1;
  $scope.tab = 1;
  
  $scope.readMore = function(divId) {
    var content = document.getElementById(divId);
    var buttonText = content.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
    if (content.style.display === "none") {
        content.style.display = "block";
        content.nextElementSibling.nextElementSibling.nextElementSibling.innerText = "READ LESS";
    } else {
        content.style.display = "none";
        content.nextElementSibling.nextElementSibling.nextElementSibling.innerText = "READ MORE";
    }
  }
  
  $scope.zoom = function(direction) {
    if (direction == 'more') {
      $scope.zoomLevel += 1;
      var content = document.getElementByTagName(body);
      content.style.fontSize = $scope.zoomLevel + 'rem';
    }
    else if (direction == 'less') {
      $scope.zoomLevel -= 1;
    }
    
  }
  
}]);
