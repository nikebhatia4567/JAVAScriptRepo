//24 h schedule
var result="Activity - Duration";
var timeleft=24;
var dur;

while(timeleft>0){
var user=prompt("please provide the activity:");
	var dur;
do{
dur=(prompt("please provide the time duration of the acitivity \n you have "+timeleft+" left "));
 
 }while(dur>timeleft)
timeleft-=dur;
 result+="\n"+activity+"-"+dur+"hours"
 }