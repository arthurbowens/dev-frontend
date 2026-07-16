(function () {
  'use strict';

  angular.module('multisearch').service('buscaService', [
    '$http',
    'apiConfig',
    function ($http, apiConfig) {
      this.buscar = function (textoBusca) {
        return $http
          .get(apiConfig.urlBusca, {
            params: { texto: textoBusca },
          })
          .then(function (response) {
            return response.data;
          });
      };
    },
  ]);
})();
