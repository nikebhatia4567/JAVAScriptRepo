var balance=100;
var number=0;
while(balance>0){
	var price=Math.floor(1 + 100*Math.random());
	if(price<=balance){
		number++;
		balance-=price;
		console.log(number+" item price: "+price+" INR." );
		console.log("balance left:"+ balance);
	}
}
 
 