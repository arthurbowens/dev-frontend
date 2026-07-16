(function () {
  'use strict';

  angular.module('multisearch').service('buscaService', ['$http', function ($http) {
    var urlDados = 'data.json';

    this.buscar = function (textoBusca) {
      return $http.get(urlDados).then(function (response) {
        return montarResultados(response.data, textoBusca.trim());
      });
    };

    function montarResultados(dados, textoBusca) {
      var grupos = [
        buscarPedidosVenda(dados.pedidosVenda, textoBusca),
        buscarPedidosCompra(dados.pedidosCompra, textoBusca),
        buscarProdutos(dados.produtos, textoBusca),
        buscarEquipamentos(dados.equipamentos, textoBusca),
        buscarMaoDeObra(dados.maoDeObra, textoBusca),
      ];

      var total = grupos.reduce(function (soma, grupo) {
        return soma + grupo.itens.length;
      }, 0);

      return { total: total, grupos: grupos };
    }

    function buscarPedidosVenda(pedidos, textoBusca) {
      var itens = pedidos
        .filter(function (pedido) { return contemTexto(pedido, textoBusca); })
        .map(normalizarPedidoVenda);

      return { categoria: 'Pedidos de Venda', itens: itens };
    }

    function buscarPedidosCompra(pedidos, textoBusca) {
      var itens = pedidos
        .filter(function (pedido) { return contemTexto(pedido, textoBusca); })
        .map(normalizarPedidoCompra);

      return { categoria: 'Pedidos de Compra', itens: itens };
    }

    function buscarProdutos(produtos, textoBusca) {
      var itens = produtos
        .filter(function (produto) { return contemTexto(produto, textoBusca); })
        .map(normalizarProduto);

      return { categoria: 'Produtos', itens: itens };
    }

    function buscarEquipamentos(equipamentos, textoBusca) {
      var itens = equipamentos
        .filter(function (equipamento) { return contemTexto(equipamento, textoBusca); })
        .map(normalizarEquipamento);

      return { categoria: 'Equipamentos', itens: itens };
    }

    function buscarMaoDeObra(equipe, textoBusca) {
      var itens = equipe
        .filter(function (pessoa) { return contemTexto(pessoa, textoBusca); })
        .map(normalizarMaoDeObra);

      return { categoria: 'Mão de obra', itens: itens };
    }

    function contemTexto(objeto, textoBusca) {
      if (!textoBusca) {
        return false;
      }

      var textoNormalizado = textoBusca.toLowerCase();

      return Object.keys(objeto).some(function (chave) {
        return String(objeto[chave]).toLowerCase().indexOf(textoNormalizado) !== -1;
      });
    }

    function normalizarPedidoVenda(pedido) {
      return {
        id: String(pedido.SalesOrderID),
        descricao: pedido.MaterialName,
        quantidade: pedido.Quantity,
      };
    }

    function normalizarPedidoCompra(pedido) {
      return {
        id: String(pedido.PurchaseOrderID),
        descricao: pedido.MaterialName,
        quantidade: pedido.Quantity,
      };
    }

    function normalizarProduto(produto) {
      return {
        id: produto.MaterialID,
        descricao: produto.MaterialName,
      };
    }

    function normalizarEquipamento(equipamento) {
      return {
        id: equipamento.EquipmentID,
        descricao: equipamento.EquipmentName,
      };
    }

    function normalizarMaoDeObra(pessoa) {
      return {
        id: String(pessoa.WorkforceID),
        descricao: pessoa.Name + ' - ' + pessoa.Shift,
      };
    }
  }]);
})();
