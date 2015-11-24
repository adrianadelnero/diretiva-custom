/**
 * Created by adriana on 24/11/15.
 */
angular.module('minhasDiretivas', [])
    .directive('meuPainel', function(){

        var directive = {
            restrict: 'E',
            templateUrl:'directive/meu-painel.html',
            transclude: true,
            scope:{
                titulo:'@'
            }
        };

        return directive;
});