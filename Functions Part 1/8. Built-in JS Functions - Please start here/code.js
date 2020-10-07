//alert function
window.alert("hello!");

//eval
eval("var x=1");
console.log(x);

//time function
var x=0;
function count(){
	console.log(x);
	x=x+1;
	//clearInterval
	if(x==100)
		clearInterval(counter);
	}
	
//setInterval
var counter=setInterval(count,1000);//at 1000 count means number will appear after 1s
//as 0s increase or decrease time interval will also 

//setTimeout

setTimeout(function(){
	console.log("f**k off");
},10000)