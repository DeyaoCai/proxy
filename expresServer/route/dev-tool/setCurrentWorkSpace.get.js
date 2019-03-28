const path = require('path');
const fs = require("fs");
module.exports = function (req, res) {
  const fullPath = path.join(req.ctoolsOpt.devToolsDir, `ctools.conf`, `ctools.conf.entry.json`);
  const entryJson = require(fullPath);
  entryJson.entry = req.query.workspace;
  fs.writeFileSync(fullPath, JSON.stringify(entryJson));
  res.send({data: true, code: 0});
};
