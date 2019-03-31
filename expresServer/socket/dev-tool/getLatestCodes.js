const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
console.log(process.cwd());
const Tools = require("./tools.js");
module.exports = function (req, socket, option) {
  const cwd = process.cwd();
  const tools = Tools(option.ctoolsOpt.devToolsDir);
  const {workspace} = req;
  const repertoryPath = tools.getWorkspaceDirs(workspace);
  let count = repertoryPath[0].length;
  repertoryPath[0].forEach(item => {
    try{process.chdir(item);}catch(e){}
    try{
      const out = cProcess.exec(`git pull`, {},e => {
        if (e) {
          count--;
          socket.emit("getLatestCodesData", `git ${item} fail!`);
          if (count <=0 ) socket.emit("getLatestCodesFail", `git fail!`);
          console.log(e);
        }
      });
      out.stdout.on('data', (data) => {
        console.log(data);
        socket.emit("getLatestCodesData", data);
      });
      out.stderr.on('data', (data) => {
        console.log(data);
        socket.emit("getLatestCodesData", `${item}: ${data}`);
      });
      out.on('close', (code) => {
        count--;
        if (count <= 0) {
          console.log("complete get codes");
          socket.emit("getLatestCodesSuccess", {data:null, code: 0});
        }
      });
    }catch(e){}
    try{process.chdir(cwd);}catch(e){}
  });
};
