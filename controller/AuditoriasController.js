var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var service = require('./../service/AuditoriaService');
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
var axios = require('axios');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/pedidos', function (req, res) {
  service.findAll()
  .then(auditorias => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, auditorias: auditorias });
  }).catch(err => {
    log.info("#### ROTA / AUDITORIA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/pedidos/:idPedido', function (req, res) {
  service.findByPedido(req.params, req, res)
  .then(auditorias => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, auditorias: auditorias });
  }).catch(err => {
    log.info("#### ROTA / AUDITORIA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.post('/pedidos', function (req, res) {
  service.save(req.body, req, res)
  .then(pedidos => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, pedidos: pedidos });
  }).catch(err => {
    log.info("#### ROTA / AUDITORIA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

module.exports = router;
