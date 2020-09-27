//for statement
for(var i=0;i<100;i++){
	console.log(i+"  .......      .................");
}

for(var i=7;i>0;i--){
	var j=Math.pow(i,3);
	console.log(j);
}

//loop through an array
var number=[1,2,3,4,5];
for(i=0;i<number.length;i++){
	number[i]=number[i]+10;
	
}
console.log(number);