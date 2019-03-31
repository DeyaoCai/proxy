const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, socket, option) {
  const tools = Tools(option.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {workspace} = req;
  entryJson.entry = workspace;
  tools.writeEntryJson(entryJson);
  try {
    console.log("start install!")
    process.chdir(option.ctoolsOpt.devToolsDir);
    const out = cProcess.exec(`npm run getDependence`, {
      maxBuffer: 2000*1024,
    },e => {
      if (e) {
        console.log(e);
        socket.emit("installDependenceFail", e);
      }
    });
    out.stdout.on('data', (data) => {
      socket.emit("installDependenceData", data);
      console.log(`stdout: ${data}`);
    });
    out.stderr.on('data', (data) => {
      socket.emit("installDependenceData", data);
      console.log(`stderr: ${data}`);
    });
    out.on('close', (code) => {
      socket.emit("installDependenceSuccess", code);
      console.log(`子进程退出码：${code}`);
    });
  } catch (e) {
    socket.emit("installDependenceFail", "install dependence fail");
  }
};
