const express = require('express');
const app = express();
const test = express();
app.get("/testGet",function (req, res) {
    const response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
    res.end();
});
test.get("/testGet",function (req, res) {
    const response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name,
        isTest: true
    };
    console.log(response);
    res.send(JSON.stringify(response));
    res.end();
});
app.use("/test", test);
app.listen(5555);
