//create the hotel objects
//price is in INR
//distance is in km
//hotel 1
var hotel1={
	name:"forest view hotel",
	price:1000 ,
distance:10 
};
//hotel 2
var hotel2={
	name:"OYO abbey hotel",
	price:300,
distance:5
};
//hotel 3
var hotel3={
	name:"St athans hotel",
	price:1000 ,
distance:20 
};
//hotel 4
var hotel4={
	name:"camden belmont  ",
	price:10000 ,
distance:1
};
//hotel 5
var hotel5={
	name:"ashburn hotel",
	price:2000 ,
distance:5
};
//hotel 6
var hotel6={
	name:"st giles london",
	price:5000 ,
distance:15 
};
var hotel=[hotel1,hotel2,hotel3,hotel4,hotel5,hotel6];
var result="here is he list of all availabe hotel nearby";

for(var i=0;i<hotel.length;i++){
	result+="\nhotel: "+hotel[i].name+","+" price per night: "+hotel[i].price+" INR"+","+" distance from the center: "+hotel[i].distance+" km";
	
}


var budget=parseFloat(prompt("please enter your budget per nightin INR:"));
var distance=parseFloat(prompt("enter the max distance from the centre in km:"));
 result="";
var x=0;
//hotel info result
for(var j=0;j<hotel.length;j++){
	if(hotel[j].price<=budget && hotel[j].distance<=distance){
		
		result+="\nhotel: "+hotel[j].name+","+" price per night: "+hotel[j].price+" INR"+","+" distance from the center: "+hotel[j].distance+" km";
	x++;
	}
}
switch(x){
	case 0:
	console.log("there are no hotel matching your search please try again.");
	break;
	case 1:
	console.log("there is only one hotel matching your search .");
	break;
	case 2:
	console.log("there are number of hotels matching your search .");
	break;
	case 3:
	console.log("there are number of hotels matching your search .");
	break;
	case 4:
	console.log("there are number of hotels matching your search .");
	break;
	case 5:
	console.log("there are number of hotels matching your search .");
	break;
}

console.log(result);


