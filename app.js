const https = require('https');
const fs = require("fs");
const http = require('http');
const httpsToHttpDefaultPort = 443;
const httpToHttpDefaultPort = 9990;

const httpToHttp = require('./server/TemHttpToHttp');
const httpsToHttp = require('./server/TemHttpsToHttp');

// https 需要安全证书
const options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};
// 将 https 代理成 http
https.createServer(options, httpsToHttp).listen(httpsToHttpDefaultPort, function () {
    console.log('Https server listening on port ' + httpsToHttpDefaultPort);
});

// http 代理成http
http.createServer(httpToHttp).listen(httpToHttpDefaultPort, function () {
    console.log('Http server listening on port ' + httpToHttpDefaultPort);
});
