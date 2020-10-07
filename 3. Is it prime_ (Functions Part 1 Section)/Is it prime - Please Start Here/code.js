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
		console.log(n+" is not a prime");
	else if(n==2)
		console.log(n+ " is prime");
	else{
		for(var i=2;i<n;i++){
			if(n%i==0){
				console.log(n+ " is not a prime."+ "\n divisible by "+i);
		        return;
		}	
	}
	console.log(n+ " is prime.");
}
	
}

print(user);
function print(max){
	var counter=0;
	var prime=" ";
	for(var i=2;i<=max;i++)
		if(isPrime(i)){
			counter++;
			prime+=i+" ";
		}
		console.log("there are"+counter+"prime numbers smaller than"+max);
		if(counter>0)
			console.log(prime);
		
}




isprime(user);