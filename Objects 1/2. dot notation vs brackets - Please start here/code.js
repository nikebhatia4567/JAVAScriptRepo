var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold",
    ring: function(){
        console.log("beep beep beep!")
    }
};
console.log(myPhone["make"]);
//need for brackets

function get(){
	var property=["make","model","warranty","colour"];
	var y=4*Math.random();
	y=Math.floor(y);
	var prop=property[y];
	return myPhone[prop];
}

console.log(get());