(function () {
  'use strict';

  var forcarBackendNuvem = false;

  var hostLocal = window.location.hostname === 'localhost'
    || window.location.hostname === '127.0.0.1';

  var usarNuvem = forcarBackendNuvem || !hostLocal;

  var urlBusca = usarNuvem
    ? 'https://dev-backend-8klo.onrender.com/api/busca'
    : 'http://localhost:8080/api/busca';

  angular.module('multisearch').constant('apiConfig', {
    urlBusca: urlBusca,
  });
})();
