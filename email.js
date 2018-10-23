const redis = require('redis');
var client = redis.createClient();
client.on('connect',function(){
    console.log("redis connected");
});
client.get("email",function(err,reply){
    if(err){
        res.send(err);
        return;
    }
    console.log(reply);
});
