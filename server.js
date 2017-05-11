var express = require("express");
var path = require("path");
var app = express();
var router = express.Router();
var fpath = path.join(__dirname,"src/www");

app.use(express.static(fpath));

router.get("/",function(req,res){
	res.sendFile(fpath + "index.html");
})

router.get("*",function(req,res){
	res.send("404 not found");
})

app.use("/",router)

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});