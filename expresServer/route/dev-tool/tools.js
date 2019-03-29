const fs = require("fs");
const path = require("path");
const cProcess = require("child_process");

function getRepertoryNameByGitUrl(gitUrl) {
  return gitUrl.replace(/(?:.*\/)([^\/]+)(?:\.git)$/, "$1")
}
function isThisNameOfThisRepertory(name, gitUrl) {
  return name === getRepertoryNameByGitUrl(gitUrl);
}
function parseBranch(gitBranchAllData){
  const brances = {
    local: [],
    remote: [],
    default: null,
    current: null,
  };
  gitBranchAllData.split(/\n/).forEach(branch => {
    branch = branch.trim();
    /^\*/.test(branch) && (brances.current = branch);
    /^remotes/.test(branch) && (/\/HEAD/.test(branch) ? (brances.default = branch) : brances.remote.push(branch));
    /^remotes/.test(branch) || (brances.local.push(branch));
  });
  return brances;
}

module.exports = function getTools(rootPath) {

  const type = require(path.join(rootPath, `sections/ctools/src/type.js`));
  const confPath = `ctools.conf`;
  const confRootPath = path.join(rootPath, confPath);

  const bizPath = `bizConfs`;
  const bizRootPath = path.join(confRootPath, bizPath);

  const entryJsonPath = `ctools.conf.entry.json`;
  function writeEntryJson(json) {
    fs.writeFileSync(path.join(confRootPath, entryJsonPath), JSON.stringify(json));
  }
  function writeWorkspaceConf(bizType, conf) {
    fs.writeFileSync(path.join(bizRootPath, `${bizType}.js`), `module.exports = ${JSON.stringify(conf)}`);
  }
  function getEntryJson(){
    return require(path.join(confRootPath, entryJsonPath))
  }
  function getWorkspaceConf(bizType) {
    // 获取 工作空间配置
    let list = [];
    if (bizType) {
      if (type.isArray(bizType)) {bizType.forEach(item => list.push(`${item}.js`));}
      if (type.isObject(bizType)) {Object.keys(bizType).filter(item => bizType[item]).forEach(item => list.push(`${item}.js`));}
      if (type.isString(bizType)) {list.push(`${bizType}.js`)}
    }
    return (list.length ? list : fs.readdirSync(bizRootPath)).map(item => ({
      name: item.replace(/\.[^\.]+$/, ""),
      dto: require(path.join(bizRootPath, item))
    }))
  }
  function getWorkSpaces(bizType) {
    // 获取工作空间的 分支情况
    return getWorkspaceConf(bizType).map(item => {
      try {
        const repertoryrootPath = path.join(rootPath, item.dto.repertoryPath);
        fs.readdirSync(repertoryrootPath).filter(
          // 筛选工作空间相关的文件夹 // 排除其他文件以及 静态，依赖文件夹
          item => (!["static", "node_modules"].includes(item) && !fs.statSync(path.join(repertoryrootPath, item)).isFile())
        ).forEach(key => {
          process.chdir(path.join(repertoryrootPath, key));
          const branches = parseBranch(cProcess.execSync("git branch -a", {encoding: "utf-8"}));
          try {// 也许还没拉下来
            const repertory = item.dto.repertoryList.find(repertory => isThisNameOfThisRepertory(key, repertory.repertory))
            branches.default = repertory.branch;
            repertory.branches = branches;
            repertory.name = key;
          } catch(e) {}
        });
      } catch(e){}
      return item;
    });
  }
  return {
    getEntryJson,getWorkspaceConf, getWorkSpaces,
    writeEntryJson, writeWorkspaceConf

  }
}
