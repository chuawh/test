//Tropo demo script
call("sip:whongchu@cisco.com");
say("Tropo is easy");

//Incoming Call
//say("Tropo is so easy https://www.tropo.com/static/audio/tropo-rocks.mp3");

/*message("We have received your SMS.", {
    to:"+6597809414",
    network:"SMS"
});
*/    
//say("Thanks for calling Tropo.",{voice: "veronica"});


//Asking Questions
/*
var result = ask("What's your favorite color?  Choose from red, blue or green.", {
   choices:"red, blue, green",
   timeout:10
});
say("You said" + result.value);
*/

//Answering Incoming SMS
/*
call("+6597809414", {
   network:"SMS"});
say("We have received your SMS.");
*/
//Sending SMS

/*
message("We have received your SMS. " + "You asked about " + currentCall.initialText, {
    to:"+6597809414",
    network:"SMS"
});*/

/*
message("Tropo test message, please ignore", {
    to:"+62811132784",
    network:"SMS"
});
*/

//Sending SMS using variable
/*
message(textMsg, {
    to:"+" + recipient,
    network:"SMS"
});
*/

//say("One potato, two potato, three potato, four potato.");
//say("<speak><prosody rate='-50%'>One potato, two potato, three potato, four potato.</prosody></speak>");
//say("<speak><voice gender="male">Mary had a little lamb,</voice></speak>");
//say("<speak><voice gender="female">Mary had a little lamb,</voice></speak>");
//say("<speak><prosody rate='+60%'>One potato, two potato, three potato, four potato.</prosody></speak>");

/*
say("<speak><prosody pitch='low'>One potato, two potato, three potato, four potato.</prosody></speak>");
say("<speak><prosody pitch='x-high'>One potato, two potato, three potato, four potato.</prosody></speak>");
*/

/*
say("<speak><prosody volume='+50'>One potato, two potato, three potato, four potato.</prosody></speak>");
say("<speak><prosody volume='-50'>One potato, two potato, three potato, four potato.</prosody></speak>");
*/

//say('<speak><audio src="http://example.com/welcome.wav">This text will be spoken if the audio file can not be played.</audio></speak>');
//say("<?xml version='1.0'?><speak><say-as interpret as='vxml:currency'>1234</say-as></speak>");
/*

function say_as(value,type){
      ssml_start="<?xml version='1.0'?><speak>";
      ssml_end="</say-as></speak>";
      ssml ="<say-as interpret-as='vxml:"+ type + "'>" + value+"";
      complete_string = ssml_start + ssml + ssml_end;
      log('@@ Say as: ' + complete_string);
      say(complete_string);
}

	say_as('USD51.33','currency');
*/

/*say("<?xml version='1.0'?><speak><say-as interpret-as='vxml:date'>20160501</say-as></speak>");
say("<?xml version='1.0'?><speak><say-as interpret-as='vxml:number'>20160501</say-as></speak>");
*/


/*var name=ask("Please say your name?", {
	 choices:["David", "Peter", "Jason"],
	 terminator:"#",
         timeout:10.0,
         mode:"speech"
});
say("You said" + name.value);
wait(5000);*/


/*say("Welcome to the geek single conference!");
conference("1337", {
    terminator: "*",
    mute: false,
    joinPrompt:{"value": name.value + "joined the Conference"},
    leavePrompt:{"value": name.value + "left the Conference"},
    playTones: true
    });*/




//say("<speak><say-as interpret-as='vxml:"+ type + "'>" + value+""
//say("<speak><say-as interpret as='digits'>1234</say-as></speak>");
//

/*
say("你好,欢迎来到香港", {voice:"Sin-ji"});


var result=ask("你最钟意么颜色？红色,蓝色,绿色", {
      choices:"红色,蓝色,绿色",
      timeout:10,
      voice:"Sin-ji",
      recognizer:"cn-hk"
    });
say("你好"+ result.value,{voice:"Sin-ji"});
*/
/*
var result = ask("Pick a number from 0 to 9", {
   choices:"0,1,2,3,4,5,6,7,8,9",
   timeout:7,
   voice:"veronica"
});
say("You said" + result.value, {voice:"veronica"});
*/
