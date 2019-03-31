const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {workSpace, repertory, name, list} = req.body;
  const conf = tools.getWorkspaceConf(workSpace)
  const filePath = path.join(req.ctoolsOpt.devToolsDir, conf[0].dto.repertoryPath, repertory, name);

  const flieString = fs.readFileSync(filePath, {encoding: "utf-8"});
  const flieArray = flieString.split(/\n/);

  list.forEach((item) =>{
    item.reverse().forEach(item=>{
      item.now && flieArray.splice(item.now -1, 1);
    });
    item.reverse().forEach(item=>{
      item.ori && flieArray.splice(item.ori - 1, 0, item.name.slice(1));
    });
  });
  try {
    fs.writeFileSync(filePath, flieArray.join(`\n`));
    res.send({data: {flieArray, list}, code: 0});
  } catch (e) {
    res.send({data: "fail", code: 1});
  }

};
