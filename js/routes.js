angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.page1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('menu.beatStore', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beatStore.html',
        controller: 'beatStoreCtrl'
      }
    }
  })

  .state('menu.contactSocial', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactSocial.html',
        controller: 'contactSocialCtrl'
      }
    }
  })

  .state('menu.leaseInfo', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leaseInfo.html',
        controller: 'leaseInfoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});