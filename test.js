//Tropo demo script

//Incoming Call
/*say("https://www.tropo.com/docs/troporocks.mp3");
say("Thanks for calling Tropo.",{voice: "veronica"});
*/

//Asking Questions
/*
var result = ask("What's your favorite color?  Choose from red, blue or green.", {
   choices:"red, blue, green"
});
say("You said" + result.value);
*/

//Answering Incoming SMS
/*
call("+6597809414", {
   network:"SMS"});
say("We have received your SMS. " + "You asked about " + currentCall.initialText);
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

say("<?xml version='1.0'?><speak><say-as interpret-as='vxml:currency'>51.33</say-as></speak>");
say("<?xml version='1.0'?><speak><say-as interpret-as='vxml:digits'>51.33</say-as></speak>");



//say("<speak><say-as interpret-as='vxml:"+ type + "'>" + value+""
//say("<speak><say-as interpret as='digits'>1234</say-as></speak>");


