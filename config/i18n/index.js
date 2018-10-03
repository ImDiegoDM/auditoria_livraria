var i18n = require('i18n');

module.exports = function isI18n(req, res, next) {
	i18n.configure({
		locales:['pt','en'],
		directory: __dirname + '/locales',
		defaultLocale: 'pt',
		cookie: 'i18n',
		autoReload: false,
		updateFiles: false,
		syncFiles: false,
	});

	return i18n;
};
