//to access objects
var phone={

	storage:"64",
	ram:"4",
	model:"iphonr xr",
	warranty:12
}
console.log(phone);
console.log(phone.storage);
 delete phone.warranty;
 console.log(phone);
 phone.specs="charger in box";
 console.log(phone);
 var otherphone=phone;
 phone.ram="6";
 console.log(otherphone);