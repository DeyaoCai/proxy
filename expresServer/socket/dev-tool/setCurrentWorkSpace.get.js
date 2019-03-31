const path = require('path');
const fs = require("fs");
const Tools = require("./tools.js");
module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const entryJson = tools.getEntryJson();
  const {workspace} = req.query;
  entryJson.entry = workspace;
  tools.writeEntryJson(entryJson);
  res.send({data: tools.getWorkSpaces(entryJson.entry), code: 0});
};
