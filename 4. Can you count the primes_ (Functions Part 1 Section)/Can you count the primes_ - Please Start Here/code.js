// Check if a number is prime or not

//1. Prompt the user to input a whole number

//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one

//3. calculate the number of prime numbers smaller than number and print them.




// Check if a number is prime or not

//1. Prompt the user to input a whole number
var user;
do{
	user=prompt("please provide a whole number");
	user=parseInt(user);
	
}while(!Number.isInteger(user));
//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one

//3. if the provided number is prime: Print the number is prime

//4. Otherwise print the number is not prime and print its smallest positive divisor other than 1.
function isPrime(n){
	
	if(n<=1)
		return false;
	else if(n==2)
		return true;
	else{
		for(var i=2;i<n;i++){
			if(n%i==0){
				return false;
		}	
	}
	
    return true; 
	}

	
}

print(user);

function print(max){
	var x=0;
	var prime=' ';
	var j=2;
	while(j<=max){
		if(isPrime(j)){
		x++;
prime+= j+' ';		
		}
		j++;
	}
	
		console.log("there are "+x+" prime numbers smaller than"+max);
		if(x>0){
			console.log(prime);
		}
		
}



