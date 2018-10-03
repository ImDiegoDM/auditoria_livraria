var test = require('tape');
var request = require('supertest');
var app = require('../../app');
var modelPromise = require('../../promise/AuditoriaPromise');
var store = require('store');
var request = require('request');

let modelName = 'AUDITORIA';

const auditoria = {
  "idPedido": 2
}

console.log('#################################################');
console.log('##############TESTE UNIT AUDITORIA###############');
console.log('#################################################');

test('Promisse FINDALL', function (done) {
  console.log(' #### CENÁRIO: Listar todas auditorias ### ');
  modelPromise.findAll().then(modelReturn => {
    done.same(modelReturn!=null, true, modelName.concat(' Listados com sucesso!'));
    done.end();
  }).catch(err => {
    done.error(err, 'Sem Erros');
    done.end();
  });
});

test('Promisse AUDITAR', function (done) {
  console.log(' #### CENÁRIO: Auditar uma transação  ### ');
  modelPromise.save(auditoria).then(modelReturn => {
    done.same(modelReturn!=null, true, modelName.concat(' Cadastrado com sucesso!'));
    done.end();
  }).catch(err => {
    done.error(err, 'Sem Erros');
    done.end();
  });
});

test('Promisse FINDBYIDPEDIDO', function (done) {
  console.log(' #### CENÁRIO: Listar auditoria pelo idPedido ### ');
  modelPromise.findByPedido(auditoria).then(modelReturn => {
    done.same(modelReturn!=null, true, modelName.concat(' Recuperado com sucesso!'));
    done.end();
  }).catch(err => {
    done.error(err, 'Sem Erros');
    done.end();
  });
});

