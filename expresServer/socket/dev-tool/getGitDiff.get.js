const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const cwd =process.cwd();
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const {workspace} = req.query;
  const workspaceConf = tools.getWorkspaceConf(workspace);
  const workspaceConfPath = workspaceConf[0].dto.repertoryPath;
  const cur = path.join(req.ctoolsOpt.devToolsDir, workspaceConfPath);
  try {
    const ret = fs.readdirSync(cur).map(item => {
      const netPath = path.join(cur, item);
      try {
        if (!fs.statSync(netPath).isFile() && !["node_modules", "static"].includes(item)) {
          process.chdir(netPath);
          const result = cProcess.execSync("git diff", {encoding: "utf-8"});
          return result && tools.parseGitDiff(result, item);
        }
      } catch(e) {console.log(e);}
    }).filter(item => item);
    process.chdir(cwd);
    res.send({data: ret, code: 0});
  } catch (e) {
    console.log(e);
    process.chdir(cwd);
    res.send({data: "fail", code: 1});
  }

};
