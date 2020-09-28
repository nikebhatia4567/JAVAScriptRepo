//holiday budget
function holidaycost(hotelprice,duration,flight,budget){
	var totalcost=(hotelprice*duration)+flight;
	if(totalcost>budget){
		console.log("please change your plan");
		
	}else{
		console.log("let\'s Go");
	}
	
}
holidaycost(5000,10,10000,110000);
