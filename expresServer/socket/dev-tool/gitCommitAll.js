const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, socket, option) {
  const cwd = process.cwd();
  const tools = Tools(option.ctoolsOpt.devToolsDir);
  const {workspace} = req;
  const repertoryPath = tools.getWorkspaceDirs(workspace);
  let count = repertoryPath[0].length;
  repertoryPath[0].forEach(item => {
    setTimeout(() => {
      try{process.chdir(item);}catch(e){}
      try{
        console.log(`git add . ${item}`);
        cProcess.execSync(`git add .`);
      }catch(e){}
      try{
        console.log(`git commit -m "auto commit" ${item}`);
        cProcess.execSync(`git commit -m "auto commit"`);
      }catch(e){}
      try{
        console.log(`git push ${item}`);
        cProcess.execSync(`git push`);
      }catch(e){}
      try{
        console.log(`git push complete ${item}`);
        count --;
        if (count <= 0) {
          console.log(546)
          socket.emit("gitCommitAllSuccess", `git commit all complete!`);
        } else{
          // socket.emit("gitCommitAllData", `git push complete ${item}`);
        }
        process.chdir(cwd);
      }catch(e){}
    },10)
  });
  console.log(`start commit all!`);
  // socket.emit("gitCommitAllData", `start commit all!`);
};
