//Manchester - london stimulation

var journey=[
trainstop1={
	stop: "manchester piccadilly",
	min:0
},
trainstop2={
	stop: "stockport",
	min:11
},
trainstop3={
	stop: "wilmslow",
	min:23
},
trainstop4={
	stop: "crewe",
	min:29
},
trainstop5={
	stop: "stafford",
	min:37
},
trainstop6={
	stop: "lichfield trent valley",
	min:50
},
trainstop7={
	stop: "tamworth",
	min:65
},
trainstop8={
	stop: "rugby",
	min:88
},
trainstop9={
	stop: "northampton",
	min:103
},
trainstop10={
	stop: "milton keynes central",
	min:111
},
trainstop11={
	stop: "watford junction",
	min:125
},
trainstop12={
	stop: "london euston",
	min:140
}
]


var checkstation=function(min){
	
	for(var i=0;i<12;i++)
		if(min==journey[i].min)
			console.log("stopping at "+journey[i].stop + " .")	
}

var x=0;
function count(){
	console.log(convertTime2(x));
	checkstation(x);
	x=x+1;
	
	//clearInterval
	if(x===141)
		clearInterval(counter);
	}


var counter=setInterval(count,100);

var addzero=function(min){
	if(min<10)
		return "0"+min;
	else
		return min;
}

var add1=function(min){
	if(min>60&&min<120)
		var min2=min-60;
	return min2;
     
		if(min2<10)
		return "0"+min2;
	else
		return min2;
}
var add2=function(min){
	if(min>120)
		var min3=min-120;
	return min3;
	 if(min3<10)
		return "0"+min3;
	else
		return min3;
}



function convertTime(min){
	if(min<60)
		return("14:"+addzero(min));
	else if(min<120)
		return("15:"+addzero(min));
	else
		return("16:"+addzero(min));
}

var convertTime2=function(min){
	var timeh= 14;
	var timem= 0;
	var departc=(timeh*60)+timem;
	var converted=departc+min;
	
	var hour=Math.floor(converted/60);
	var minutes=converted%60;
	return hour+ ":"+addzero(minutes);
}