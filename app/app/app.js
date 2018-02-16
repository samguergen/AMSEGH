var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  console.log('inside of config block');

  $stateProvider
    
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('become-member', {
        url: '/become-member',
        templateUrl: 'views/become-member.html'
      })
      .state('community', {
        url: '/community',
        templateUrl: 'views/community.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
      .state('donate', {
        url: '/donate',
        templateUrl: 'views/donate.html'
      })
      .state('faces', {
        url: '/faces-of-our-members',
        templateUrl: 'views/faces.html'
      })
      .state('family', {
        url: '/family-involvement',
        templateUrl: 'views/family.html'
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'views/faq.html'
      })
      .state('member-app', {
        url: '/member-application',
        templateUrl: 'views/member-app.html'
      })
      .state('member-programs', {
        url: '/member-programs',
        templateUrl: 'views/member-programs.html'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'views/news.html'
      })
      .state('non-rider-member', {
        url: '/non-rider-member',
        templateUrl: 'views/non-rider-member.html'
      })
      .state('organization', {
        url: '/organization',
        templateUrl: 'views/organization.html'
      })
      .state('pay-online', {
        url: '/pay-online',
        templateUrl: 'views/pay-online.html'
      })
      .state('rider-stories', {
        url: '/rider-stories',
        templateUrl: 'views/rider-stories.html'
      })
      .state('what-we-do', {
        url: '/what-we-do',
        templateUrl: 'views/what-we-do.html'
      })
      .state('corporate', {
        url: '/corporate',
        templateUrl: 'views/corporate.html'
      })
      .state('volunteer-to-drive', {
        url: '/volunteer-to-drive',
        templateUrl: 'views/volunteer-to-drive.html'
      })
      .state('volunteer-app', {
        url: '/volunteer-app',
        templateUrl: 'views/volunteer-app.html'
            // resolve: {
            //     formData: function ($scope) {
            //         $scope.formData = {};
            //     },
            //   }
      })
      .state('newsletters', {
        url: '/newsletters',
        templateUrl: 'views/newsletters.html'
      })
      .state('add-pta-credit', {
        url: '/add-pta-credit',
        templateUrl: 'views/add-pta-credit.html'
      })

  // default fall back route
  $urlRouterProvider.otherwise('/');

  // enable HTML5 Mode for SEO
  // $locationProvider.html5Mode(true);
  // $locationProvider.html5mode({ enabled: true, requireBase: false });
})


// myApp.run(function($rootScope, $scope) { 
//   $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
//     $scope.formData = {};
//     // if (fromState.name === "") { 
//     //   // The initial transition comes from "root", which uses the empty string as a name.
//     //   alert("initial state: " + toState.name);
//     // }
//   });
// });





myApp.controller('MainController', ['$scope', '$transitions','$http', function ($scope, $transitions, $http)  {
  console.log('inside main controller');
  $scope.zoomLevel = 1;
  $scope.tab = 1;
  $scope.formData = {};
  $scope.loading = false;
  $scope.zipPattern = new RegExp(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/);
  $scope.emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/);
  $scope.datePattern = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  $scope.dobPattern = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  
  // $transitions.onStart({}, function($transition, $scope){
  //     console.log('changing state');
  //     $scope.formData = {};
  //     $scope.tab = 1;
  // });
  
  $scope.resetFormData = function(){
    $scope.formData = {}
  }

  $scope.nextTabMemberApp = function(prev){
    if (prev) {
      $scope.tab -= 1;
    } else {
      $scope.tab += 1;
    }
  }
  
  $scope.readMore = function(divId) {
    var content = document.getElementById(divId);
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
  
  $scope.submitForm = function(volunteer){
    var emailSubject = 'New membership application received';
    if (volunteer) {
      emailSubject = 'New volunteer application received';
    }
    console.log('form you are sending is ', $scope.formData);
    $scope.loading = true;
    $http.post('/sendmail', {
      from: '"ITN Web User" <donotreply@itnamerica.com>',
      to: 'samguergen@gmail.com',
      subject: emailSubject,
      text: $scope.formData
    }).then(res=>{
        $scope.loading = false;
        $scope.serverMessage = 'Your form was submitted successfully. You should hear back from us soon.';
    });
  }
  
  
}]);
