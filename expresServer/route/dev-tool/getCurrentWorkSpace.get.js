const path = require('path');
const fs = require("fs");
module.exports = function (req, res) {
  const confPath = `ctools.conf`;
  const entryJsonPath = `ctools.conf.entry.json`;
  const entryJson = require(path.join(req.ctoolsOpt.devToolsDir, confPath, entryJsonPath));
  const fullpath = path.join(req.ctoolsOpt.devToolsDir, confPath, `bizConfs`);
  const workSpaceList = fs.readdirSync(fullpath).map(item => ({
    name: item.replace(/\.[^\.]+$/, ""),
    dto: require(path.join(fullpath, item))
  }));
  res.send({
    data: {
      currentEntry: entryJson.entry,
      list: workSpaceList
    },
    code: 0,
  });
};
