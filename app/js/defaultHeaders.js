var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'access_token': 'b139c47e8f8e2d8865708a9eb2e8e0dbbb2c02ff'}
          return config;
        }
      };
    });