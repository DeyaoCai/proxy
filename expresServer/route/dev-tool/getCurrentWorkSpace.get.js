const Tools = require("./tools.js");
module.exports = function (req, res) {
  const tools = Tools(req.ctoolsOpt.devToolsDir);
  const entry = tools.getEntryJson().entry;
  res.send({
    data: {
      currentEntry: entry,
      list: tools.getWorkSpaces()
    },
    code: 0,
  });
};
