angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.iCC2017', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/iCC2017.html',
        controller: 'iCC2017Ctrl'
      }
    }
  })

  .state('tabsController.information', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/information.html',
        controller: 'informationCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('importantDates', {
    url: '/ImportantInfo',
    templateUrl: 'templates/importantDates.html',
    controller: 'importantDatesCtrl'
  })

  .state('programSchedule', {
    url: '/ProgramSchedule',
    templateUrl: 'templates/programSchedule.html',
    controller: 'programScheduleCtrl'
  })

  .state('tabsController.dashBoard', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/dashBoard.html',
        controller: 'dashBoardCtrl'
      }
    }
  })

  .state('venue', {
    url: '/Venue',
    templateUrl: 'templates/venue.html',
    controller: 'venueCtrl'
  })

  .state('topics', {
    url: '/Topics',
    templateUrl: 'templates/topics.html',
    controller: 'topicsCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});