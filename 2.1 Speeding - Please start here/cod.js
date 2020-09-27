// speed limit is 100miles/hour

//task 1-store the speedlimit in miles per hr in speedlimitmiles
var  speedlimitmiles=100;
console.log(speedlimitmiles);

//task 2-convert speed limt to klometer per hr and store in speedlimitkm
var speedlimitkm= speedlimitmiles * 1.61;
console.log(speedlimitkm);

//mnimun speed for a hefty fine in miles oer he stored in speedfnemiles

var speedfinemiles=speedlimitmiles*1.1+5;
console.log(speedfinemiles);

//convert in km per hr
var speedfinekm=speedfinemiles*1.61;
console.log(speedfinekm);

//unary operator
var x=5;
var y=7;
var z=y<0 ?'fail':'pass';
console.log(z);

//type conversions
z=true && 'fu';
console.log(z);
z=1 && 'boo';
console.log(z);
z='thu'&&'booo';
console.log(z);
z= 0 && 'uuu';
console.log(z);
console.log(''==false);

z=''&&false;
console.log(z);


//type coercion
var a="1 " + 9;//js manages to convert number to string 
console.log(a);
console.log(typeof a);

var a="9"-99;// js manages to convert string to number
console.log(a);
console.log(typeof a);

console.log(0==false);//here 0 can be converted to false
console.log(""==false);//here also
console.log(null==false);//but null and undefined cant
console.log(undefined==false);
console.log(NaN==NaN);
console.log(null==null);
console.log(null==undefined);

  
