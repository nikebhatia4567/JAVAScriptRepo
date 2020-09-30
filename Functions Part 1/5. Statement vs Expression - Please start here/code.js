// differencd between statement and expression is we have to give it a name
//another difference is in expression function cant be declared beforehand
console.log(sum(10,20));
function sum(a,b){
	return a+b;
}//function statement

var greet=function(name){
	console.log("hello "+name+" !");
}//function expression
greet("bsdk");

function sum2(myfunction,myarray){
	var result=0;
	for(var i=0;i<myarray.length;i++){
result += myfunction(myarray[i]);}

return result;
}

var y=sum2(function(x){
	return Math.pow(x,2);
},[2,3]);

 console.log(y);