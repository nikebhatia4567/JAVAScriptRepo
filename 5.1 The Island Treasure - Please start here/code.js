//treasure island

var box1={
	silver:10,
	gold:5,
	platinum:5
}

var box2={
	silver:5,
	gold:7,
	platinum:8
}

var box3={
	silver:7,
	gold:3,
	platinum:10
}

var box1={
	silver:6,
	gold:6,
	platinum:12
}

var box1={
	silver:3,
	gold:12,
	platinum:5
}

var priceKG={
	silver:400,
	gold: 40000,
	platinum: 25000
}

var calcBoxValue= function(box){
	var value=(box.silver*priceKG.silver)+ (box.gold*priceKG.gold)+ (box.platinum*priceKG.platinum);
	return value;
} 

var calcTotal=function(myfunction,myarray){
	console.log(myfunction);
	var total=0;
	for (var i=0;i<myarray.length;i++){
		total+=myfunction(myarray[i]);
	}
		return "you will get "+total;
}

var totals=calcTotal(calcBoxValue, [box1,box2,box3]);



