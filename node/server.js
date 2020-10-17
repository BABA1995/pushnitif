var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'https://fcm.googleapis.com/fcm/send',
  path: '/fcm/send',
  //since we are listening on a custom port, we need to specify it by hand
  //This is what changes the request to a POST request
  method: 'POST',
  headers: {'Authorization': 'key=AAAAiMs-z1A:APA91bG_wveEA88bxv4TnDt4RYQsCy45TgA0e0iNLkErXqQA4xQLXxkbJvQYJac5Coxd_f6ZIeaPmhcmpwf1Gq-wdGyc1fgiOnCImSek1ALIQbLDjYpSIJkSuncVZH897yzWS4PaaGZa'},
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write(JSON.stringify({ 
    "notification": {
     "title": "Hey there", 
     "body": "Subscribe to mighty ghost hack youtube channel"
    },
    "to" : "cZYXKE2WuhrQzO9uXFsiiB:APA91bE7usc2mFPO0YCSQWCs8em55evTbgZ9zvj2L1lUv054aakwJnlE4-Oh42XxPedHKHtu1HQGLuWZowYkI8DrAfHfMRs5w-ZtXzb0gCf2Wz56y7fwcCR7mJ3T_HYBZXxX52M1JOI3"
   }));
req.end();