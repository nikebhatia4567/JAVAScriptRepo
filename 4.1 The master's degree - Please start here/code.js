// will you pass university exam
//have 5  modules each of pass mark 60 marks
//condition nedd atleast pass 4 modules and also av. marks greater than 60
var first=parseInt(prompt('module 1 marks'));
var second=parseInt(prompt('module 2 marks'));
var third=parseInt(prompt('module 3 marks'));
var fourth=parseInt(prompt('module 4 marks'));
var fifth=parseInt(prompt('module 5 marks'));

var a=first >=60?0:1;
var b=second >=60?0:1;
var c=third >=60?0:1;
var d=fourth >=60?0:1;
var e=fifth>=60?0:1;
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);
 console.log(e);
 var numberofmodulespassed=!a+!b+!c+!d+!e;
 console.log('you passed '+numberofmodulespassed+' modules');
 var averagemarks=((first+second+third+fourth+fifth)/5).toFixed(2);
 console.log('this is your average marks'+averagemarks);
 
 var passed=numberofmodulespassed>=4&&averagemarks>=60;
 console.log('you are passed'+passed);
 
 var result=passed?"congrats":"sorry";
 console.log(result);