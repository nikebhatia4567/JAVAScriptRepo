//help the cashier return the right of change


//Programme input: 
    //Amount due
	var amountdue=parseFloat(prompt("amount due:"));

	
    //Amount paid by the customer
    var amountpaid=parseFloat(prompt("amount paid by the customer"))
//Programme output:
    //Print change amount
	var change=(amountpaid-amountdue).toFixed(2);
	console.log("total due:"+amountdue+"$");
	console.log("amount paid:"+amountpaid+"$");
	console.log("change:"+change+"$");
	
    //Print change breakdown: notes and coins
	var note_break;
	//for 50$ note
	note_break={
		value:50,
		name:'50 $ note',
		x:0	
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0 ? console.log(note_break.name+note_break.x):0;

	// for 20$ note
	note_break={
		value:20,
		name:'20 $',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 10$ note
	note_break={
		value:10,
		name:'10 $',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;

	//for 5$ note
	note_break={
		value:5,
		name:'5 $',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 2$ coin
note_break={
		value:2,
		name:'2 $ coin0',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
		
	//for 1$ coin
	note_break={
		value:1,
		name:'1 $ coin',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 50cents
	note_break={
		value:0.50,
		name:'50 cents',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 20 cents
	note_break={
		value:0.20,
		name:'20 cents',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 10 cents
	note_break={
		value:0.10,
		name:'10 cents',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 5 cents
	note_break={
		value:0.05,
		name:'5 cents',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 2 cents
	note_break={
		value:0.02,
		name:'2 cents',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	//for 1 cent
	note_break={
		value:0.01,
		name:'1 cents',
		x:0
	}
	note_break.x=Math.floor(change/note_break.value);
	change=(change%note_break.value).toFixed(2);
	note_break.x>0?console.log(note_break.name+note_break.x):0;
	
	
	
	
	



//UK Example: 
    //Banknotes:
    //£50 - £20 - £10 - £5
    //Coins:
    //£2 - £1 - 50p - 20p - 10p - 5p - 2p - 1p

console.log("please collect your change");
console.log("thank you for shopping");






