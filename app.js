const path = require("path");
const https = require('https');
const fs = require("fs");
const http = require('http');
const httpsToHttpDefaultPort = 443;
const httpToHttpDefaultPort = 9990;
const tapeHttpToHttpDefaultPort = 9995;
const TemHttpToHttp = require('./server/TemHttpToHttp');
const TemHttpsToHttp = require('./server/TemHttpsToHttp');
const HttpToHttp = require('./server/HttpToHttp');

// https 需要安全证书
const options = {
    key: fs.readFileSync(path.join(__dirname, './privatekey.pem')),
    cert: fs.readFileSync(path.join(__dirname, './certificate.pem'))
};
// 将 https 代理成 http
https.createServer(options, TemHttpsToHttp).listen(httpsToHttpDefaultPort, function () {
    console.log('Https server listening on port ' + httpsToHttpDefaultPort);
});

// http 代理成http
http.createServer(TemHttpToHttp).listen(httpToHttpDefaultPort, function () {
    console.log('Http server listening on port ' + httpToHttpDefaultPort);
});
http.createServer(HttpToHttp).listen(tapeHttpToHttpDefaultPort, function () {
  console.log('Http server listening on port ' + tapeHttpToHttpDefaultPort);
});
