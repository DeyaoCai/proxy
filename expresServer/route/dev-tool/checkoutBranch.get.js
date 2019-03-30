const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");


function trim(str){return str.replace(/^\*/, "").trim();}
function isCurrentBranch(branchStr) {return /^\*/.test(branchStr)}
function getLastOfPath(path){return path.split(/[\\\/]+/).pop();}
function isThisUrlOfTheRepertory(url, repertory) {return new RegExp(`\\\/${repertory}\\.git`).test(url)}

function isThisBranchTheCurrentOne(branch, allBranches) {return new RegExp(`\\*\[ \]\*${branch}`).test(allBranches);}
function isThisBranchOneOFBranches(branch, allBranches) {return new RegExp(branch).test(allBranches);}

module.exports = function (req, res) {
  const cwd = process.cwd();
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  let {repertory, workspace, branchs, branch} = req.query;
  branchs = branchs && branchs.map(branch => trim(getLastOfPath(branch))) || [];
  branch && branchs.push(trim(getLastOfPath(branch)));
  const confPath = path.join(cwd, "./ctools.conf/bizConfs", `${workspace}.js`);
  const conf = tools.getWorkspaceConf(workspace)[0];
  let nextBranch = [];
  try {
    process.chdir(path.join(cwd, conf.dto.repertoryPath, repertory));
    branchs.forEach(branch => {
      const repertoryItem = conf.dto.repertoryList.find(item => isThisUrlOfTheRepertory(item.repertory, repertory));
      const allBranches = cProcess.execSync("git branch -a", {encoding: "utf-8"});
      if (!isThisBranchTheCurrentOne(branch, allBranches)) {
        if (!isThisBranchOneOFBranches(branch, allBranches)) {cProcess.execSync(`git branch ${branch}`, {encoding: "utf-8"});}
        cProcess.execSync(`git checkout ${branch}`, {encoding: "utf-8"});
      } else{}
      let next = cProcess.execSync("git branch -a", {encoding: "utf-8"}).split(/\n/).find(isCurrentBranch);
      nextBranch.push(repertoryItem);
      repertoryItem.branch = trim(next);
      fs.writeFileSync(confPath, `module.exports = ${JSON.stringify(conf.dto)}`);
    });
    res.send({data: nextBranch, code: 0});
    process.chdir(cwd);
  }catch (e) {
    console.log(e);
    process.chdir(cwd);
    res.send({data: null, code: 0});
  }
};
