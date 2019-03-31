const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const {workspace} = req.query;
  const workspacePath = path.join(req.ctoolsOpt.devToolsDir, tools.getWorkspaceConf(workspace)[0].dto.repertoryPath);
  try {
    cProcess.execSync(`start ${workspacePath}`);
    res.send({data: null, code: 0});
  } catch (e) {
    res.send({data: "fail", code: 1});
  }
};
