var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req,res) {
    res.render("index");
})

var server = app.listen(8555, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at /%s:%s", host, port)

})
