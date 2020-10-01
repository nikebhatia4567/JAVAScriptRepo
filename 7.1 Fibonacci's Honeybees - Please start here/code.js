//recursion method
var generation=function(n){
	console.log(n);
	if(n===0||n===1){
		return 1;
	}
	else{
		return generation(n-1)+ generation(n-2);
}

};
console.log(generation(100));

