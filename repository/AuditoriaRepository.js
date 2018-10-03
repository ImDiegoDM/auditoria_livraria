var i18n = require('../config/i18n')();
var dao = require('../dao/AuditoriaDAO');

i18n.init;

exports.findAll = function(pedido, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAll(pedido)
		.then(pedidos => {
			resolve(pedidos);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findByPedido = function(pedido, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findByPedido(pedido)
		.then(pedidos => {
			resolve(pedidos);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.save = function(pedido, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.save(pedido)
		.then(pedidos => {
			resolve(pedidos);
		}).catch(err => {
			reject(err);
	    });
    });
};
