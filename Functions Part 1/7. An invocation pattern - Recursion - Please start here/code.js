// a design pattern

var factorial=function (n){
	var result=1;
	for(var i=n;i>0;i--)
		result*=i;
	return result;
}

var factorial2=function(n){
	if(n==1)
		return 1;
	else
		return n*factorial2(n-1);
}
