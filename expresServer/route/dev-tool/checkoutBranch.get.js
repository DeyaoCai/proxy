const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const cwd = process.cwd();
module.exports = function (req, res) {
  let {repertory, workspace, branchs, branch} = req.query;
  branchs = branchs && branchs.map(branch => branch.split("/").pop().replace(/^\*/ ,"").trim()) || [];
  branch && branchs.push(branch.split("/").pop().replace(/^\*/ ,"").trim());
  const confPath = path.join(cwd, "./ctools.conf/bizConfs", `${workspace}.js`);
  const conf = require(confPath);
  const branchPath = path.join(cwd, conf.repertoryPath, repertory);
  let nextBranch = [];
  try {
    process.chdir(branchPath);
    branchs.forEach(branch => {
      const repertoryItem = conf.repertoryList.find(item => new RegExp(`\\\/${repertory}\\.git`).test(item.repertory))
      const allBranches = cProcess.execSync("git branch -a", {encoding: "utf-8"});
      if (!new RegExp(`\\*\[ \]\*${branch}`).test(allBranches)) {
        if (!new RegExp(branch).test(allBranches)) {
          cProcess.execSync(`git branch ${branch}`, {encoding: "utf-8"});
        }
        cProcess.execSync(`git checkout ${branch}`, {encoding: "utf-8"});
      } else{
      }
      let next = cProcess.execSync("git branch -a", {encoding: "utf-8"}).split(/\n/).find(item => /^\*/.test(item));
      next && (next = next.replace(/^\*/, "").trim());
      nextBranch.push(next);
      repertoryItem.branch = next;
      fs.writeFileSync(confPath, `module.exports = ${JSON.stringify(conf)}`);
    });
    res.send({data: nextBranch && nextBranch.replace(/^\*/, "").trim(), code: 0});
    process.chdir(cwd);
  }catch (e) {
    process.chdir(cwd);
    res.send({data: null, code: 0});
  }

};
