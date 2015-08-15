var angular = require('angular');

angular.module('naturaApp',[])
.directive('registerForm',function(){
	return {
		templateUrl:'templates/register_form.html',
		controller:function($scope,$attrs,$http){
			$scope.registerData = {
				state:$attrs.state
			};

			$scope.register = function(){
				$scope.submitted = true;
				$scope.registerForm.repeatEmail.$error.dontMatch = 
							$scope.registerData.email !== $scope.registerData.repeatEmail;

				if($scope.registerForm.$valid){
					return $http.post('http://natura-api.herokuapp.com/registrados',$scope.registerData)
						.then(function(){
							$scope.status = 'submitted';
						});
				}
			}
			window.s = $scope;
		}
	}
})