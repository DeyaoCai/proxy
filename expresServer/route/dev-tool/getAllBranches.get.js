const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const cwd = process.cwd();
const Tools = require("./tools.js");

module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const {repertory, workspace} = req.query;
  const conf = tools.cRequire(path.join(cwd, "./ctools.conf/bizConfs", `${workspace}.js`));
  try {
    const branchPath = path.join(cwd, conf.repertoryPath,repertory);
    process.chdir(branchPath);
    const allBranches = cProcess.execSync("git branch -a", {encoding: "utf-8"});
    process.chdir(cwd);
    res.send({data: {branch: allBranches.split(/\n/)}, code: 0,});
  } catch (e) {
    process.chdir(cwd);
    res.send({msg: "获取失败", data: null, code: 0});
  }
};
