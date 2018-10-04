var i18n = require('./config/i18n')();
var app = require('./app');
var port = process.env.PORT || 8080;

i18n.init;
console.log(i18n.__("versao"));
var server = app.listen(port, function() {
	console.log(i18n.__mf("msg_versao", {versao: i18n.__("versao")}));
	console.log(i18n.__mf("msg_started_api", {port: port}));
});
