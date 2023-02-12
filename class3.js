
let divisor = prompt("Digite um numero");

while(divisor>100){
	alert("O numero inserido precisa ser menor do que 100")
	divisor = prompt("Digite um numero");
}

alert("Abra seu Console para ver de 0 a 100, quais sao os numero diviseis por " + divisor)
console.log("De 0 a 100, estes sao os numero diviseis por " + divisor);

for (let number = 1; number <= 100; number++) {
		if (number%divisor == 0) {
			console.log(number)
		}else {
			continue	
	}
}
