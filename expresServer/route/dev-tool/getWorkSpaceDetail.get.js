const path = require('path');
const fs = require("fs");
module.exports = function (req, res) {
  const confPath = `ctools.conf`;
  const entryJsonPath = `ctools.conf.entry.json`;
  const entryJson = require(path.join(req.ctoolsOpt.devToolsDir, confPath, entryJsonPath));
  const workSpaceList = fs.readdirSync(path.join(req.ctoolsOpt.devToolsDir, confPath, `bizConfs`)).map(item => item.replace(/\.[^\.]+$/, ""));
  console.log({
    data: {
      currentEntry: entryJson.entry,
      list: workSpaceList
    },
    code: 0,
  })
  res.send({
    data: {
      currentEntry: entryJson.entry,
      list: workSpaceList
    },
    code: 0,
  });
};
