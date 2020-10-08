var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json())
router.route('/')
.all(function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>{
    res.end("Will send all dishes to you!")
})
.post(function(req,res,next){
    res.end("Will add the dish : "+req.body.name+", with details : "+req.body.description);
})
.put(function(req,res,next){
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes")
})
.delete(function(req,res,next){
    res.end("Deleting all dishes")
});
router.route("/:dishId")
.get(function(req,res,next){
    res.end("Will send the details of the dish : "+req.params.dishId+" to you!");
})
.post(function(req,res,next){
    res.statusCode = 403;
    res.end("POST Operation not supported on /dishes/"+req.params.dishId)
})
.put(function(req,res,next){
    res.write("Updating the dish : "+req.params.dishId+" \n");
    res.end("Will Update The dish:"+req.body.name+" ,with details: "+req.body.description);
})
.delete(function(req,res,next){
    res.end("Deleting dish : "+req.params.dishId);
});
module.exports = router;