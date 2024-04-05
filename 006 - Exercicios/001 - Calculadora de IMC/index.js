
const peso = 105;
const altura = 1.78;

const imc = Number((peso/(altura*altura)).toFixed(2));

switch (true){
    case imc < 17:
        console.log("Muito abaixo do peso");
        break;
    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso");
        break;
    case imc >= 18.50 && imc <= 24.99:
        console.log("Peso Normal");
        break;
    case imc >= 25 && imc <= 29.99:
        console.log("Acima do peso");
        break;
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I");
        break;
    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II");
        break;


}