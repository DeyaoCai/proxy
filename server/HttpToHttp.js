const http = require('http');
const fs = require('fs');
const path = require('path');
// 域名， 后期可统一
const MS_DOMAIN = `http://182.61.18.142/`;
const WS_DOMAIN = `http://182.61.18.142/`;
const DEFAULT_DOMAIN = `http://182.61.18.142/`;

const BASE_SERVE_CONFIG = {
  MS_DOMAIN,
  WS_DOMAIN,
  DEFAULT_DOMAIN
};
// 请求的简单配置
const REQUEST_CONFIG = {
  // funcName: `method::domain::path::shallCache`
  getImages: `get::MS_DOMAIN::docker/images::true`,
  getCityList: `get::MS_DOMAIN::common/search/train/cityList.json::true`,
  getTrainList: `get::MS_DOMAIN::train/search/list.json::false`,
  getTravelPlanList: `get::MS_DOMAIN::travelPlanApplay/getTravelPlan.json?bizType=train&originPlace=%E4%B8%8A%E6%B5%B7&destPlace=%E5%8C%97%E4%BA%AC&arriveDate=2019-02-28&leaveDate=2019-02-28&pageIndex=1&pageSize=10::false`,
  getExpenseList: `get::MS_DOMAIN::expense/queryAllExpense.json::false`,
  getOrgListData: `get::MS_DOMAIN::org/getAllOrgsWithUserCount.json::false`,
  getStaffList: `get::MS_DOMAIN::org/getUsersByOrgId.json::false`,
  findTravellers: `get::MS_DOMAIN::org/findTravellers.json::false`,
  trainIndex: `get::MS_DOMAIN::train/booking/index.json::false`,
  createOrder: `post::MS_DOMAIN::train/booking/createOrder.json::false`,
};

// 将简化的配置字符串(REQUEST_CONFIG)转成对象
function _parseRequestConfigItem(str = ``) {
  const [method = `get`, domain = DEFAULT_DOMAIN, path = ``, shallCache = false] = str.split(`::`).map(item => item.trim());
  return {method, domain, path, shallCache};
}

// 去斜杠
function _end(str = ``) {
  return str.replace(/\/$/g, ``)
}

function _double(str = ``) {
  return str.replace(/\/\//g, `/`)
}

function _start(str = ``) {
  return str.replace(/^\//g, ``)
}

function _domain(str = ``) {
  return _start(str)
}

function _path(str = ``) {
  return _double(_end(str))
}

const httpsAppConfig = (function parseRequestConfigItem(REQUEST_CONFIG) {
  const ajax = {};
  Object.keys(REQUEST_CONFIG).forEach(item => {
    const config = _parseRequestConfigItem(REQUEST_CONFIG[item]);
    if (!config.path) {
      console.warn(`request ${item}'s path may lost, ` +
        `this will lead to ajax.${item} be an empty function rather than a fetch!`);
    }
    const fullPath = `${_domain(BASE_SERVE_CONFIG[config.domain] || DEFAULT_DOMAIN)}/${_path(config.path)}`;

    if (!config.path) return;
    ajax[parsePath(config.path)] = config;
  });
  return ajax;
})(REQUEST_CONFIG);

// const session = `a21c59f4-dce5-4019-9358-ebc19da8813c`;
function parsePath(path = ``) {
  return path.split("?").shift().replace(/^(\/\/|\/)/, "");
}

module.exports = function httpApp(req, res) {
  // 接受收数据
  let str = '';
  req.on('data', data => (str += data));
  console.log(req.url);
  // 接受数据完成
  req.on('end', () => {
    if (req.url === `/favicon.ico`) return res.end(`{}`);
    // 跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', 'http://dev.z-trip.cn:8080');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.url === `/`) {
      res.end(fs.readFileSync(path.join(__dirname ,`../../Tape-frontend/index.html`)));
    }else if (/[\.#]/.test(req.url)) {
      res.end(fs.readFileSync(path.join(__dirname ,`../../Tape-frontend/${req.url}`)));
    } else {
      // 字符编码
      res.setHeader("ContentType", "charset=utf-8");
      res.setHeader("Encoding", "utf-8");
      // 貌似不用深拷贝
      const reqHeader = JSON.parse(JSON.stringify(req.headers));
      // 要发送的http请求头
      const config = httpsAppConfig[parsePath(req.url)];
      const domain = BASE_SERVE_CONFIG[config.domain].replace(/(http:\/\/|https:\/\/)/g, ``).replace(/\/$/g, ``);
      const sentData = str;
      const options = {
        hostname: domain,
        port: 80,
        path: req.url,
        method: req.method,
        headers: reqHeader,
      };
      options.headers.host = domain;
      options.headers.referer = `http://${domain}`;
      // options.headers.cookie = `SESSION=${session}`;
      options.headers[`Content-Length`] = Buffer.byteLength(sentData, 'utf8');

      delete options.headers.origin;

      // 删除没有值的字段， fetch 貌似 不支持空值的参数
      Object.keys(options.headers).forEach(item => {
        if (!options.headers[item]) {
          delete options.headers[item]
        }
      });
      // 请求代理后的服务
      const thisHttp = http.request(options, ret => {
        if (ret.statusCode !== 200) {
          console.error(new Error('请求失败: ' + `状态码: ${res.statusCode}`).message);
        }

        let rawData = '';
        ret.setEncoding('utf8');
        ret.on('data', (chunk) => {
          rawData += chunk;
        });

        ret.on('end', () => {
          let retData = rawData;
          try {
            if (req.url === "/favicon.ico") {
              retData = JSON.stringify(retData);
            }
          } catch (e) {
          }
          // 返回http 服务的返回值
          res.end(retData);
        });
      });
      thisHttp.on('error', (e) => {
        console.error(`请求遇到问题: ${e.message}`);
        res.end(e.message);
      });
      thisHttp.write(sentData + "/n"); //发送请求
      thisHttp.end();
    }
  });
};
