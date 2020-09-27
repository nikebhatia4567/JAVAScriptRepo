//student 1 mark details
var student1={
	name:"mark",
	grade:80
}
//student 2 john details
var student2={
	name:"john",
	grade:77
}
//student 3 sara details
var student3={
	name:"sara",
	grade:90
}
//average of all grades 
var average=(student1.grade+student2.grade+student3.grade)/3;
console.log(average.toFixed(2));
//mark increased his marks by 15
var extra=student1;
student1.grade=95;
console.log(extra);
 var newaverage=(extra.grade+student2.grade+student3.grade)/3;
 console.log(newaverage.toFixed(2));