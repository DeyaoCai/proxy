const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, socket, option) {
  const cwd = process.cwd();
  const tools = Tools(option.ctoolsOpt.devToolsDir);
  const {workspace} = req;
  const repertoryPath = tools.getWorkspaceDirs(workspace);
  repertoryPath[0].forEach(item => {
    try{process.chdir(item);}catch(e){}
    console.log("gitCommitAllData", `git add . ${item}`);
    socket.emit("gitCommitAllData", `git add . ${item}`);
    try{cProcess.execSync(`git add .`);}catch(e){}
    console.log("gitCommitAllData", `git commit -m "auto commit" ${item}`);
    socket.emit("gitCommitAllData", `git commit -m "auto commit" ${item}`);
    try{cProcess.execSync(`git commit -m "auto commit"`);}catch(e){}
    console.log("gitCommitAllData", `git push ${item}`);
    socket.emit("gitCommitAllData", `git push ${item}`);
    try{cProcess.execSync(`git push`);}catch(e){}
    console.log("gitCommitAllData", `git push complete ${item}`);
    socket.emit("gitCommitAllData", `git push complete ${item}`);
    try{process.chdir(cwd);}catch(e){}
  });
  console.log("gitCommitAllSuccess", `git commit all complete!`);
  socket.emit("gitCommitAllSuccess", `git commit all complete!`);
};
