var robot={
	name:"robot",
	coordinates: {
		x:0,
		y:0,
		z:0
}}

	robot.check= function(){
		console.log("robot position: x="+ 
		this.coordinates.x + ", y="+
		this.coordinates.y+
		", z="+this.coordinates.z);
	
	// chech the coordinates as (4,2,3)
	if(this.coordinates.x===4 &&this.coordinates.y===2&&this.coordinates.z===3){
		console.log("mission complete!");
	}};


robot.moveright= function(){
	if(this.coordinates.x!==10){
		this.coordinates.x++;
	}
	this.check();
};

robot.moveleft= function(){
	if(this.coordinates.x!==0){
		this.coordinates.x--;
	}
	this.check();
};
robot.moveforward= function(){
	if(this.coordinates.y!==10){
		this.coordinates.y++;
	}
	this.check();
};

robot.movebackward= function(){
	if(this.coordinates.y!==0){
		this.coordinates.y--;
	}
	this.check();
};
robot.moveup= function(){
	if(this.coordinates.z!==10){
		this.coordinates.z++;
	}
	this.check();
};

robot.movedown= function(){
	if(this.coordinates.z!==0){
		this.coordinates.z--;
	}
	this.check();
};




