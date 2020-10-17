var FCM = require('fcm-node');
    var serverKey = 'AAAAiMs-z1A:APA91bG_wveEA88bxv4TnDt4RYQsCy45TgA0e0iNLkErXqQA4xQLXxkbJvQYJac5Coxd_f6ZIeaPmhcmpwf1Gq-wdGyc1fgiOnCImSek1ALIQbLDjYpSIJkSuncVZH897yzWS4PaaGZa'; //put your server key here
    var fcm = new FCM(serverKey);
 
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'ckzA2q_2UPSx09l6qQzCt0:APA91bEbav2TtgmbLMrtrboaF47ZyHJKUJ8n6FRoXt21mdzTULBiJQo46_eBZ86pFwVVKZyI_X7_Chpr4YMkgj_bfuuMhnRKVQKoLsXkz8BfMQKCoidLR-36eZ7Z59ZNP1o5DTd9Z2i1', 
        
        
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification' 
        },
        
        // data: {  //you can send only notification or only data(or include both)
        //     my_key: 'my value',
        //     my_another_key: 'my another value'd
        // }
    };
    
   
    for (i = 1; i <= 5; ++i) {
        setTimeout(function(){
            fcm.send(message, function(err, response){
                if (err) {
                    console.log("Something has gone wrong!");
                } else {
                    console.log("Successfully sent with response: ", response);
                }
            });
        }, 5000);
      }