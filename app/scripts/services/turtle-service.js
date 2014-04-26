'use strict';

angular.module('tmntApp')
  .service('TurtleService', function TurtleService($q, $http) {
    return {
    	getTeams: function() {
    		var deferred = $q.defer();
    		$http({method: 'GET', url: 'http://tmnt.devmounta.in/team'}).success(function(data){
    			deferred.resolve(data);
    		})
    		return deferred.promise;
    	}
    }
  });
