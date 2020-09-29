//the maimi museum
function greet(language){
	if(language==="english"||language==="ENGLISH"){
		return function(name){
			console.log("hello "+name+"!"+" Welcome to the museum!");
		}
	}else if(language==="spanish"||language==="SPANISH"){
		return function(name){
			console.log("hola "+name+"!"+"Bienvenido al museo!");
		}
	}else{
		return function (name){
		console.log("I can only speak english or spanish");
	}}
}

var y=prompt("pls type your language");
var x=prompt("pls provide your name")
greet(y)(x);
