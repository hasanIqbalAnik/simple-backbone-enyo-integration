enyo.dispatcher.listen(window, "dbsynced");
enyo.master._bubbleDefault = enyo.master.bubble;
enyo.master.bubble = function(inEventName, inEvent, inSender) {
    if (inEventName == "ondbsynced") {
        enyo.master.waterfallDown("ondbsynced");
    } else {
        enyo.master._bubbleDefault(inEventName, inEvent, inSender);
    }
};

var appIsOnline = function checkServer(server){
    var active = false;
     $.ajax({
        url: 'http://'+server,
        timeout: 2000,
        success: function(){
        	active = true;
        	window.enyo.dispatch({type:"dbsynced"});            
        },
        error: function(req, err){
           if(err == 'timeout'){
              console.log('Server: %s timed out', server);
           }
        }
     });
     return active;
};

var intervalID = setInterval(function(){
	console.log("checking internet connection...");
	debugger;
	if(appIsOnline('localhost:8000')){
		debugger;
		Db.syncServerWithLocalDb();
		Db.updateLocalDbFromServer();
		clearInterval(intervalID);
	}
}, 5000);
