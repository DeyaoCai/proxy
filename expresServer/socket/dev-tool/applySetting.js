const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const cwd = process.cwd();
const Tools = require("./tools.js");
module.exports = function (data, socket, option) {
  const tools = Tools(option.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {name, dto} = data;
  entryJson.entry = name;
  tools.writeEntryJson(entryJson);
  tools.writeWorkspaceConf(name, dto);
  try {
    process.chdir(option.ctoolsOpt.devToolsDir);
    console.log("start get codes");
    const out = cProcess.exec(`npm run getCodes`, {},e => {if (e) console.log(e);});
    out.stdout.on('data', (data) => {
      console.log(data);
      socket.emit("applySettingData", data);
    });
    out.stderr.on('data', (data) => {
      console.log(data);
      socket.emit("applySettingData", data);
    });
    out.on('close', (code) => {
      console.log("complete get codes");
      socket.emit("applySettingData", code);
      socket.emit("applySettingSuccess", tools.getWorkSpaces(entryJson.entry));
    });
    process.chdir(cwd);

  } catch (e) {
    console.log(e);
    process.chdir(cwd);
    socket.emit("applySettingFail", {data: "fail", code: 1});
  }
};
