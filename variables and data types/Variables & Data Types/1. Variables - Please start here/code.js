//declare a variable
var score;
console.log(score);

//declare and initialize variable
var livesleft = 5;
console.log(livesleft);

console.log(typeof livesleft);
//re-assign a value to our variable
livesleft_=2.4;
console.log(livesleft_);

console.log(typeof livesleft);
//constants
const firstname='nikhil';

//max min value of number in js
var max=Number.MAX_VALUE;
console.log(max);
var min=Number.MIN_VALUE;
console.log(min);

//arithmetic opretions
var a=3+4;
console.log(a);

a=livesleft-livesleft_;
console.log(a);
a+=5;
console.log(12/5);

//operator precedence
var c=5*5+7;
console.log(c);

var d=++c;
var e=c++;
console.log(c);
console.log(d);
console.log(e);

//remainder operator
var f=99%8;
console.log(f);

var g=9**9;
console.log(g); 

//nan
var h=0/0;
console.log(h);

//power operator
var i=Math.pow(2,2000);
console.log(i);

//parse a string
var number='10';
console.log(typeof number);
console.log(typeof parseInt(number)); 
console.log(parseInt('not a number'));

var j=console.log();
console.log(typeof j);
var k=10
console.log(typeof toString(k));