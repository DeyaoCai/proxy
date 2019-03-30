const path = require('path');
const fs = require("fs");
const cProcess = require("child_process");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const cwd = process.cwd();
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const {workSpace} = req.query;
  const repertoryPath = tools.getWorkspaceDirs(workSpace);
  // console.log(repertoryPath)
  repertoryPath[0].forEach(item => {
    console.log(item)
    try{process.chdir(item);}catch(e){console.log(e)}
    try{cProcess.execSync(`git add .`);}catch(e){console.log(e)}
    try{cProcess.execSync(`git commit -m "auto commit"`);}catch(e){console.log(e)}
    try{process.chdir(cwd);}catch(e){console.log(e)}
  });
  try {
    res.send({data: null, code: 0});
  } catch (e) {
    res.send({data: "fail", code: 1});
  }

};
