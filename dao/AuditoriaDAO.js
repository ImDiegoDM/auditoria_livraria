var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var axios = require('axios');
const pedidos = require('./../auditorias.json')
let idDinamico = 2;

exports.findAll = function(pedido) {
	return new Promise(function(resolve, reject) {
		resolve(pedidos);
	});
}

exports.findByPedido = function(pedido) {
	return new Promise(function(resolve, reject) {
		const auditoriaReturn = pedidos.find(function (pedidoP) {
			if(pedidoP.idPedido === parseInt(pedido.idPedido)){
				return pedidoP;
			}
		});
		if(auditoriaReturn){
			resolve(auditoriaReturn);
		}else{
			reject('Pedido não encontrado')
		}

		resolve(pedidos);
	});
}

async function findPedido(pedido) {
    const pedidoReturn = await axios.get('https://gestao-livro-aula3.herokuapp.com/api/v1/pedidos/'.concat(pedido.idPedido)).then((retorno) => {
        return retorno.data;
	})
	return pedidoReturn;
}

exports.save = function(pedido) {
	return new Promise(function(resolve, reject) {
		try {
			findPedido(pedido).then(pedidoReturn => {
				if(pedidoReturn.pedidos) {
					const novaAuditoria = {
						"id": ++idDinamico,
						"idPedido": pedidoReturn.pedidos.id,
						"descricao": `${pedidoReturn.pedidos.cliente.nome} realizou o pedido nº ${pedidoReturn.pedidos.codigo} aprovado no dia ${pedidoReturn.pedidos.dataTransacao} no valor de R$ ${pedidoReturn.pedidos.valor}`,
						"dataTransacao": pedidoReturn.pedidos.dataTransacao,
						"valorAutorizado": pedidoReturn.pedidos.valor,
						"estado": pedidoReturn.pedidos.estado
					};
					if(pedidos.push(novaAuditoria)) {
						resolve(pedidos);
					} else {
						reject('Erro ao auditar o pagamento');
					}
				} else {
					reject('Pedido não encontrado para auditar');
				}
			}).catch((error) => {
				reject(error);
			})
		} catch (error) {
			reject('Erro ao auditar o pagamento', error);
		}
	});
}
