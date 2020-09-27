//if statement
var funds=parseInt(prompt("please enter your account balance"));
var price=100;
var fundsleft=funds-price;
if(price>funds){
	
	console.log("payment unsuccessful \n you don\'t have eoungh balance");
}else if(price==funds){
	console.log("congrats \n payment successful");
	console.log("you don\' have any balane left");
	console.log("left balance="+fundsleft);
}
else{
	
	console.log("congrats \n payment successful");
	console.log("you have balence left="+fundsleft);
}