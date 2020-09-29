//rafael vs djokovic

var totalvotes=0;
var player1={
	name:"Rafael Nadal",
	votes:0
}
var player2={
	name:"Novak Djokovic",
	votes:0
}
function vote(player){
	player.votes++;
	totalvotes++;
}
for(var i=0;i<10;i++){
var y = prompt( "please provide your vote to decide the winner \n disclaimer: type 1 for nadal and type 2 for novak");
if(y==="1"){
	vote(player1);
}else if(y==="2"){
	vote(player2);	
}
}
    console.log("results:")
	console.log(player1.name+" : "+player1.votes+" votes");
	console.log(player2.name+" : "+player2.votes+" votes");
	
if(player1.votes>player2.votes){
	console.log(player1.name+" is the favorite to win");
}else if(player1.votes<player2.votes){
	console.log(player2.name+" is the favorite to win");
} else {
	console.log("no favorite to win!");
}


