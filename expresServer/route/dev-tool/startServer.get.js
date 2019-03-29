const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {workspace} = req.query;
  entryJson.entry = workspace;
  tools.writeEntryJson(entryJson);
  try {
    console.log("start server!")
    process.chdir(req.ctoolsOpt.devToolsDir);
    const out = cProcess.exec(`npm run devCdy`, {
      maxBuffer: 2000*1024,
    },e => {
      if (e) console.log(e);
    });
    out.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    out.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });
    out.on('close', (code) => {
      console.log(`子进程退出码：${code}`);
    });
    res.send({data: "success", code: 0});
  } catch (e) {
    res.send({data: "fail", code: 1});
  }

};
