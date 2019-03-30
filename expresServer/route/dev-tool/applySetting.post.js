const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {name, dto} = req.body;
  entryJson.entry = name;
  tools.writeEntryJson(entryJson);
  tools.writeWorkspaceConf(name, dto);
  try {
    process.chdir(req.ctoolsOpt.devToolsDir);
    cProcess.execSync("npm run getCodes");
    res.send({data: tools.getWorkSpaces(entryJson.entry), code: 0});
  } catch (e) {
    res.send({data: "fail", code: 1});
  }
};
