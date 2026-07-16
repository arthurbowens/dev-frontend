(function () {
  'use strict';

  angular.module('multisearch').controller('BuscaController', [
    'buscaService',
    function (buscaService) {
      var vm = this;

      vm.textoBusca = '';
      vm.carregando = false;
      vm.buscou = false;
      vm.erro = '';
      vm.resultado = null;

      vm.buscar = function () {
        var texto = vm.textoBusca.trim();

        if (!texto) {
          vm.resultado = null;
          vm.buscou = false;
          vm.erro = '';
          return;
        }

        vm.carregando = true;
        vm.erro = '';
        vm.buscou = true;

        buscaService.buscar(texto)
          .then(function (resultado) {
            vm.resultado = resultado;
          })
          .catch(function () {
            vm.resultado = null;
            vm.erro = 'Não foi possível realizar a busca. Tente novamente.';
          })
          .finally(function () {
            vm.carregando = false;
          });
      };
    },
  ]);
})();
