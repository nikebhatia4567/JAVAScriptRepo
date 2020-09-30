//pass a value to a function
function f(x){
	return Math.pow(x,2);
}
//funtion in a funtion
function g(myfunction,a,b){
	return myfunction(a)*myfunction(b);
}
var y =parseInt( prompt("please give a "));
var z =parseInt( prompt("please give b "));

console.log(g(f,y,z));

//funtion returning a function
function add(x){
	return function(a){
		return a*x;
	}
}
var addone=add(1);
console.log(addone(2));
var addtwo= add(2);
console.log(addtwo(10));
