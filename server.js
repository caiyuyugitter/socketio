/**
 * Created by Administrator on 2016/7/23 0023.
 */
var  express = require('express'),
    app = express(),
    server = require('http').createServer(app);
debugger;
app.use('/',express.static(__dirname + '/page'));
server.listen(3030);

