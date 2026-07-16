(function () {
  'use strict';

  function textoQuantidade(quantidadeItens) {
    if (quantidadeItens === 0) {
      return '(nenhum item encontrado)';
    }

    if (quantidadeItens === 1) {
      return '(1 item encontrado)';
    }

    return '(' + quantidadeItens + ' itens encontrados)';
  }

  angular.module('multisearch').component('resultadoGrupo', {
    bindings: {
      grupo: '<',
    },
    templateUrl: 'app/templates/resultado-grupo.html',
    controller: function () {
      var ctrl = this;
      ctrl.textoQuantidade = textoQuantidade;
    },
  });
})();
