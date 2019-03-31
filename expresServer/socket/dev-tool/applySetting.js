const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const cwd = process.cwd();
const Tools = require("./tools.js");
module.exports = function (data, option, socket) {
  const tools = Tools(option.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {name, dto} = data;
  entryJson.entry = name;
  tools.writeEntryJson(entryJson);
  tools.writeWorkspaceConf(name, dto);
  try {
    process.chdir(option.ctoolsOpt.devToolsDir);
    console.log("start get codes");
    cProcess.execSync("npm run getCodes");
    console.log("complete get codes");
    process.chdir(cwd);
    socket.emit("applySettingSuccess", tools.getWorkSpaces(entryJson.entry));
  } catch (e) {
    console.log(e);
    process.chdir(cwd);
    socket.emit("applySettingFail", {data: "fail", code: 1});
  }
};
