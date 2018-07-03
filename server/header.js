const allowCrossDomain = (req,res,next)=>{
    req.header("Access-Allow-Origin","*");
    req.header("Access-Allow-Methods","GET,POST,PUT,DELETE,PATCH");
    req.header("Access-Allow-Headers","Content-Type:application/json,Authentication");
    next();
};

module.exports = allowCrossDomain;