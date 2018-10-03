var promise = require("../promise/AuditoriaPromise");

exports.findAll = function(pedido, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAll(pedido, req, res)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findByPedido = function(pedido, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findByPedido(pedido, req, res)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function(pedido, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.save(pedido, req, res)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}
