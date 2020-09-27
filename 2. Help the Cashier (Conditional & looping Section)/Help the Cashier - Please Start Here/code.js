//help the cashier return the right of change


//Programme input: 
    
//Amount due
var total = prompt('Total due:');
    
//Amount paid by the customer
var moneyPaid = prompt('Amount paid:');

//convert collected values to float numbers. Make sure the decimal part has two digits only.
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

//Programme output:
    
//calculate the change amount.Make sure the decimal part has two digits only.
var change = (moneyPaid - total).toFixed(2);

//Print the amount due/ amount paid/ change
console.log('Due: £' + total + '/ Paid: £' + moneyPaid + '/ Change: £' + change);
    
//Print change breakdown: notes and coins

var note_coin;

//£50note inloop
note_coin = {
    value: [50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01],
    name: ['50$','20$','10$','5$','2$','1$','50c','20c','10c','5c','2c','1c'],
    return:[0,0,0,0,0,0,0,0]
};
for(var i=0;i<=11;i++){
note_coin.return[i] = Math.floor(change/note_coin.value[i]);
change = (change%note_coin.value[i]).toFixed(2);
note_coin.return[i] > 0 ? console.log(note_coin.name[i] + note_coin.return[i]): 0;

}
