const path = require('path');
const fs = require("fs");
module.exports = function (req, res) {
  const basePath = path.join(req.ctoolsOpt.devToolsDir, "./ctools.conf/savedBizConfs");
  fs.writeFileSync(`${basePath}/${req.body.name}`, `module.exports = ${JSON.stringify(req.body.data)}`);
  res.send({
    data: null,
    code: 0,
    ok: true,
  });
}
;
