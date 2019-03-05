这是一个个人使用的代理服务器

##

开启服务器

### `npm run start`

TemHttpsToHttp 服务将占用https的默认端口 443
在本地启用后：当由https服务请求进来后，将转发到本地的 http://m.z-trip.cn:80 端口，然后将请求结果转发给原https 当由https服务请求

TemHttpToHttp 服务将占用8889
需要您自行配置需要转发的接口域名（一个接口仅支持一个域名），
// /server/TemHttpToHttp.js
const REQUEST_CONFIG = {
    // funcName: `method::domain::path::shallCache`
    getCityList: `get::MS_DOMAIN::common/search/train/cityList.json::true`,
};
其中的 MS_DOMAIN 需要在同名文件 （/server/TemHttpToHttp.js）中配置具体值

const MS_DOMAIN = `http://ms.z-trip.cn/`;
const WS_DOMAIN = `http://ws.z-trip.cn/`;
const DEFAULT_DOMAIN = `http://ws.z-trip.cn/`;

const BASE_SERVE_CONFIG = {
    MS_DOMAIN,
    WS_DOMAIN,
    DEFAULT_DOMAIN
};

在本地启用后：当由服务请求进来后，将转发到本地的 domain:80/原path，然后将请求结果转发给原请求
