var repository = require("../repository/AuditoriaRepository");

exports.findAll = function (pedido) {
    return new Promise(function( resolve, reject ) { 
        repository.findAll(pedido)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findByPedido = function (pedido) {
    return new Promise(function( resolve, reject ) { 
        repository.findByPedido(pedido)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function (pedido) {
    return new Promise(function( resolve, reject ) { 
        repository.save(pedido)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}
