//beating the world recoed in 100m race

//asking your gender
var gender=prompt("please provide your gender");
if(gender=="male"){
	var time=prompt("please enter your recorded time in seconds");
	 if(time<9.58){
		 console.log("congratulations you beat the world record");
		 console.log("and you also beat usain bolt");
		 console.log("new world record is "+gender+time);
	 }else{
		 console.log("sorry your are not that fast ");
}}
else{
	var time=prompt("please enter your recorded time in seconds");
	 if(time<10.48){
		 console.log("congratulations you beat the world record");
		 console.log("and you also beat florence griffith-joyner");
		 console.log("new world record is "+gender+time);
	 }
	 else{
		 console.log("sorry your are not that fast ");
	 }
}