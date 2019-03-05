
const http = require('http');
module.exports = function  httpsToHttp(req, res) {
    // 接受收数据
    let str = '';
    req.on('data',  data => (str += data));
    console.log(req.url);
    // 接受数据完成
    req.on('end', () => {
        // 跨域
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // 字符编码
        res.setHeader("ContentType", "charset=utf-8");
        res.setHeader("Encoding", "utf-8");
        // 貌似不用深拷贝
        const reqHeader = JSON.parse(JSON.stringify(req.headers));
        // 要发送的http请求头
        const options = {
            hostname: 'm.z-trip.cn',
            port: 80,
            path: req.url,
            method: 'GET',
            headers: {
                "host": 'm.z-trip.cn',
                "connection": reqHeader['connection'],
                "user-agent": reqHeader['user-agent'],
                "accept": reqHeader['accept'],
                "referer": "http://vuc.cn",
                "accept-language": reqHeader['accept-language'],
                "cookie": reqHeader['cookie'],
            }
        };
        // 删除没有值的字段， fetch 貌似 不支持空值的参数
        Object.keys(options.headers).forEach(item=>{
            if (!options.headers[item]) {
                delete options.headers[item]
            }
        });
        // 请求代理后的服务
        http.request(options, ret => {
            // 请求状态判断
            if (ret.statusCode !== 200) console.error(new Error('请求失败' + `状态码: ${statusCode}`).message);
            // 接收数据
            let rawData = '';
            ret.setEncoding('utf8');
            ret.on('data', (chunk) => { rawData += chunk; });
            // 结果处理
            ret.on('end', () => {
                let retData = rawData;
                try{if (req.url === "/favicon.ico") {retData = JSON.stringify(retData);}}catch(e){}
                // 返回http 服务的返回值
                res.end(retData);
            });
        }).end();
    });
};
