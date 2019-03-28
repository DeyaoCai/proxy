const path = require('path');
const fs = require("fs");
module.exports = function (req, res) {
  console.log(req.ctoolsOpt.devToolsDir)
  const basePath = path.join(req.ctoolsOpt.devToolsDir, "./ctools.conf/bizConfs");
  const confList = fs.readdirSync(basePath);
  const retList  = confList.map(item => ({
    name: item,
    data:require(`${basePath}/${item}`)
  }));

  res.send({
    data: retList,
    code: 0,
  });
};
